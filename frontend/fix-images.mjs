import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "src");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

for (const file of walk(SRC)) {
  let code = fs.readFileSync(file, "utf8");
  if (!/<img[^>]*\ssrc=\{/.test(code)) continue;

  if (!code.includes('from "@/lib/assets"')) {
    const useClient = code.startsWith('"use client"');
    const insertAt = useClient
      ? code.indexOf("\n", code.indexOf('"use client"')) + 1
      : 0;
    code =
      code.slice(0, insertAt) +
      '\nimport { assetSrc } from "@/lib/assets";\n' +
      code.slice(insertAt);
  }

  code = code.replace(/(<img[^>]*\ssrc=\{)([^}]+)(\})/g, (match, pre, expr, post) => {
    const trimmed = expr.trim();
    if (trimmed.startsWith("assetSrc(")) return match;
    return `${pre}assetSrc(${trimmed})${post}`;
  });

  fs.writeFileSync(file, code, "utf8");
  console.log("Fixed images:", path.relative(SRC, file));
}
