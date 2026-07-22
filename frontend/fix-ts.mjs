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
  const original = code;

  code = code.replace(/entry\.target\.style/g, "(entry.target as HTMLElement).style");
  code = code.replace(
    /elements\.forEach\(\(el, i\) => \{\s*\n\s*el\.style/g,
    "elements?.forEach((el, i) => {\n      (el as HTMLElement).style"
  );
  code = code.replace(
    /elements\.forEach\(\(el, i\) => \{\s*\n\s*\(el as HTMLElement\)\.style/g,
    "elements?.forEach((el, i) => {\n      (el as HTMLElement).style"
  );

  if (file.endsWith("CursorGlow.tsx")) {
    code = code.replace(
      /const raf = useRef<HTMLElement \| null>\(null\);/,
      "const raf = useRef<number | null>(null);"
    );
    code = code.replace(
      /const handleMove = \(e\) =>/,
      "const handleMove = (e: MouseEvent) =>"
    );
  }

  if (file.endsWith("OurInsights.tsx")) {
    if (!code.includes('import type { Swiper as SwiperType }')) {
      code = code.replace(
        /import "swiper\/css";/,
        'import type { Swiper as SwiperType } from "swiper";\nimport "swiper/css";'
      );
    }
    code = code.replace(
      /const swiperRef = useRef<HTMLElement \| null>\(null\);/,
      "const swiperRef = useRef<SwiperType | null>(null);"
    );
  }

  if (file.endsWith("ResourcesGrid.tsx")) {
    code = code.replace(
      /gsap\.utils\.toArray\("\.resource-card"\)/,
      'gsap.utils.toArray<HTMLElement>(".resource-card")'
    );
  }

  if (code !== original) {
    fs.writeFileSync(file, code, "utf8");
    console.log("Fixed:", path.relative(SRC, file));
  }
}
