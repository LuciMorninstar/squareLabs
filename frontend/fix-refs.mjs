import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "src");

const REF_TYPE_BY_VAR = {
  headingRef: "HTMLHeadingElement",
  titleRef: "HTMLHeadingElement",
  eyebrowRef: "HTMLParagraphElement",
  descriptionRef: "HTMLParagraphElement",
  coordRef: "HTMLSpanElement",
  canvasWrapRef: "HTMLDivElement",
  spotlightRef: "HTMLDivElement",
  buttonsRef: "HTMLDivElement",
  tabsRef: "HTMLButtonElement[]",
  closeTimer: "ReturnType<typeof setTimeout>",
};

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function inferRefType(varName, tagName) {
  if (REF_TYPE_BY_VAR[varName]) return REF_TYPE_BY_VAR[varName];

  switch (tagName) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return "HTMLHeadingElement";
    case "p":
      return "HTMLParagraphElement";
    case "span":
      return "HTMLSpanElement";
    case "button":
      return "HTMLButtonElement";
    case "nav":
      return "HTMLElement";
    case "section":
      return "HTMLElement";
    case "img":
      return "HTMLImageElement";
    case "canvas":
      return "HTMLCanvasElement";
    default:
      return "HTMLDivElement";
  }
}

for (const file of walk(SRC)) {
  let code = fs.readFileSync(file, "utf8");
  const refVars = new Map();

  for (const match of code.matchAll(/ref=\{([a-zA-Z0-9_]+)\}/g)) {
    const varName = match[1];
    if (refVars.has(varName)) continue;

    const before = code.slice(0, match.index);
    const tagMatch = before.match(
      /<(section|div|h1|h2|h3|h4|h5|h6|p|span|button|nav|img|canvas)\b[^>]*$/
    );
    const tagName = tagMatch?.[1] ?? "div";
    refVars.set(varName, inferRefType(varName, tagName));
  }

  for (const [varName, elementType] of refVars.entries()) {
    const arrayType = elementType.endsWith("[]");
    const nullableType = arrayType
      ? `(${elementType.slice(0, -2)} | null)[]`
      : `${elementType} | null`;
    const refType = arrayType ? nullableType : nullableType;

    code = code.replace(
      new RegExp(`const\\s+${varName}\\s*=\\s*useRef<[^>]+>\\(null\\)`, "g"),
      arrayType
        ? `const ${varName} = useRef<${refType}>([])`
        : `const ${varName} = useRef<${refType}>(null)`
    );

    code = code.replace(
      new RegExp(`const\\s+${varName}\\s*=\\s*useRef\\(\\s*\\[\\]\\s*\\)`, "g"),
      `const ${varName} = useRef<${refType}>([])`
    );

    code = code.replace(
      new RegExp(`const\\s+${varName}\\s*=\\s*useRef\\(null\\)`, "g"),
      arrayType
        ? `const ${varName} = useRef<${refType}>([])`
        : `const ${varName} = useRef<${refType}>(null)`
    );
  }

  code = code.replace(
    /ref=\{\(el\) => \(([a-zA-Z0-9_]+)\.current\[[^\]]+\] = el\)\}/g,
    "ref={(el) => { $1.current[index] = el; }}"
  );

  code = code.replace(
    /ref=\{\(el\) => \(([a-zA-Z0-9_]+)\.current\[[^\]]+\] = el\)\}/g,
    "ref={(el) => { $1.current[index] = el; }}"
  );

  fs.writeFileSync(file, code, "utf8");
}

console.log("Updated useRef types across components.");
