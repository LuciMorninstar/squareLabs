import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "src");

function transformContent(content, filePath) {
  let code = content;

  // Remove ?react suffix from SVG imports (Next.js uses @svgr/webpack)
  code = code.replace(/\.svg\?react/g, ".svg");

  // Replace react-router Link with next/link
  code = code.replace(
    /import\s*\{\s*Link\s*\}\s*from\s*["']react-router["'];?/g,
    'import Link from "next/link";'
  );

  // Replace useNavigate with useRouter
  code = code.replace(
    /import\s*\{\s*useNavigate\s*\}\s*from\s*["']react-router["'];?/g,
    'import { useRouter } from "next/navigation";'
  );
  code = code.replace(/const\s+navigate\s*=\s*useNavigate\(\);?/g, "const router = useRouter();");
  code = code.replace(/navigate\(\s*["']([^"']+)["']\s*\)/g, 'router.push("$1")');

  // Replace Link to= with href=
  code = code.replace(/(<Link[^>]*)\s+to=/g, "$1 href=");

  // Remove .js/.jsx extension from imports
  code = code.replace(/from\s+(["'][^"']+)\.jsx?(["'])/g, "from $1$2");

  // Fix mixed quotes from '../ -> "@/ path rewrites
  code = code.replace(/from\s+"@\/([^"']+)'/g, 'from "@/$1"');

  // Fix ResourcesGrid import case
  code = code.replace(
    /from\s+["']\.\.\/constants\/resource["']/gi,
    'from "@/constants/Resource"'
  );

  // Normalize imports to path alias
  code = code.replace(/from\s+["']\.\.\/components\//g, 'from "@/components/');
  code = code.replace(/from\s+["']\.\.\/constants\//g, 'from "@/constants/');
  code = code.replace(/from\s+["']\.\.\/assets\//g, 'from "@/assets/');
  code = code.replace(/from\s+["']\.\/([^"']+)["']/g, (match, p1) => {
    if (filePath.includes("components") && !p1.startsWith(".")) {
      return `from "./${p1}"`;
    }
    return match;
  });

  // Add use client directive for interactive files
  const needsClient =
    filePath.includes("components") ||
    filePath.includes("pages") ||
    /use(State|Effect|Ref|LayoutEffect|Callback|Memo|Reducer)\b/.test(code) ||
    /\bgsap\b/.test(code) ||
    /\bSwiper\b/.test(code) ||
    /\bTHREE\b/.test(code) ||
    /useRouter/.test(code);

  if (needsClient && !code.startsWith('"use client"') && !code.startsWith("'use client'")) {
    code = '"use client";\n\n' + code;
  }

  return code;
}

function migrateDir(dir, extFrom, extTo) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      migrateDir(fullPath, extFrom, extTo);
      continue;
    }
    if (!entry.name.endsWith(extFrom)) continue;

    const content = fs.readFileSync(fullPath, "utf8");
    const transformed = transformContent(content, fullPath);
    const newPath = fullPath.replace(new RegExp(`${extFrom}$`), extTo);
    fs.writeFileSync(newPath, transformed, "utf8");
    fs.unlinkSync(fullPath);
    console.log(`Migrated: ${path.relative(SRC, newPath)}`);
  }
}

// Copy CSS to app directory
const cssSrc = path.join(SRC, "index.css");
const cssDest = path.join(SRC, "app", "globals.css");
fs.mkdirSync(path.dirname(cssDest), { recursive: true });
fs.copyFileSync(cssSrc, cssDest);
console.log("Copied index.css -> app/globals.css");

// Migrate components and constants
migrateDir(path.join(SRC, "components"), ".jsx", ".tsx");
migrateDir(path.join(SRC, "constants"), ".js", ".ts");

// Read pages for app router (don't migrate in place)
const pagesDir = path.join(SRC, "pages");
const pageMap = {
  HomePage: "",
  WhatWeDoPage: "what-we-do/page",
  WhoWeArePage: "who-we-are/page",
  OurWorkPage: "our-work/page",
  Resource: "resources/page",
  NotFoundPage: "not-found",
};

for (const [component, route] of Object.entries(pageMap)) {
  const jsxPath = path.join(pagesDir, `${component}.jsx`);
  if (!fs.existsSync(jsxPath)) continue;

  let content = fs.readFileSync(jsxPath, "utf8");
  content = transformContent(content, jsxPath);

  // Fix WhatWeDoPage missing import and typo
  if (component === "WhatWeDoPage") {
    content = content.replace(/<>s\n/, "<>\n");
    if (!content.includes("whatWeDoPageData")) {
      content = content.replace(
        /("use client";\n\n)?/,
        '$1import { whatWeDoPageData } from "../constants/whatWeDoPageData";\n\n'
      );
    }
  }

  const isNotFound = route === "not-found";
  const destDir = isNotFound
    ? path.join(SRC, "app")
    : route === ""
      ? path.join(SRC, "app", "(main)")
      : path.join(SRC, "app", "(main)", route.replace("/page", ""));
  fs.mkdirSync(destDir, { recursive: true });

  const fileName = isNotFound ? "not-found.tsx" : "page.tsx";
  fs.writeFileSync(path.join(destDir, fileName), content, "utf8");
  console.log(`Created app route: ${route}`);
}

// Migrate StartAProject and ExploreOurWork as pages
for (const [name, route] of [
  ["StartAProject", "start-a-project/page"],
  ["ExploreOurWork", "explore-our-work/page"],
]) {
  const jsxPath = path.join(SRC, "components", `${name}.jsx`);
  if (!fs.existsSync(jsxPath)) continue;

  let content = fs.readFileSync(jsxPath, "utf8");
  content = transformContent(content, jsxPath);
  const destDir = path.join(SRC, "app", "(main)", route.replace("/page", ""));
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, "page.tsx"), content, "utf8");
  console.log(`Created app route: ${route}`);
}

console.log("\nMigration complete!");
