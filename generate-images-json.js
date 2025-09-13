// generate-images-json.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, "public/gallery");
const outputFile = path.join(galleryDir, "images.json");

const validExts = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".JPG"];

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error("❌ Error reading gallery folder:", err);
    return;
  }

  const images = files.filter(
    (file) =>
      validExts.includes(path.extname(file)) && !file.startsWith(".") // ignore hidden files
  );

  fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));

  console.log(`✅ images.json generated with ${images.length} images`);
});
