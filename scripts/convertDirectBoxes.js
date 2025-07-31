#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Find all TSX files that contain direct box HTML
const findDirectBoxFiles = () => {
  const srcDir = path.join(__dirname, "../src");
  const files = [];

  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith(".tsx")) {
        const content = fs.readFileSync(fullPath, "utf8");
        if (
          content.includes("bg-gradient-to-r") &&
          content.includes("px-6 py-4")
        ) {
          files.push(fullPath);
        }
      }
    }
  };

  walkDir(srcDir);
  return files;
};

// Convert direct HTML boxes to Box components
const convertFile = (filePath) => {
  console.log(`Converting: ${path.relative(process.cwd(), filePath)}`);

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // Add Box import if not present
  if (!content.includes("import Box from")) {
    const importMatch = content.match(/import.*from.*['"]/);
    if (importMatch) {
      const lastImportIndex = content.lastIndexOf(importMatch[0]);
      const insertIndex = content.indexOf(";", lastImportIndex) + 1;
      content =
        content.slice(0, insertIndex) +
        '\nimport Box from "../../components/ui/Box/Box";' +
        content.slice(insertIndex);
      changed = true;
    }
  }

  // Pattern to match direct box HTML
  const boxPattern =
    /<div\s+className="bg-white\s+dark:bg-neutral-900\s+rounded-2xl\s+shadow-xl\s+border\s+border-neutral-200\s+dark:border-neutral-700\s+overflow-hidden">\s*<div\s+className="bg-gradient-to-r\s+([^"]+)">\s*<h[23]\s+className="[^"]*">([^<]+)<\/h[23]>\s*<p\s+className="[^"]*">([^<]+)<\/p>\s*<\/div>\s*<div\s+className="p-6">\s*([\s\S]*?)\s*<\/div>\s*<\/div>/g;

  content = content.replace(
    boxPattern,
    (match, gradient, title, description, content) => {
      changed = true;

      // Map gradient to headerColor
      let headerColor = "primary";
      if (gradient.includes("from-blue-600")) headerColor = "blue";
      else if (gradient.includes("from-purple-600")) headerColor = "purple";
      else if (gradient.includes("from-green-600")) headerColor = "green";
      else if (gradient.includes("from-orange-600")) headerColor = "orange";
      else if (gradient.includes("from-pink-600")) headerColor = "pink";
      else if (gradient.includes("from-teal-600")) headerColor = "teal";
      else if (gradient.includes("from-emerald-600")) headerColor = "emerald";
      else if (gradient.includes("from-indigo-600")) headerColor = "blue";
      else if (gradient.includes("from-cyan-600")) headerColor = "teal";
      else if (gradient.includes("from-red-600")) headerColor = "orange";

      return `<Box
        title="${title.trim()}"
        description="${description.trim()}"
        headerColor="${headerColor}"
      >
        ${content}
      </Box>`;
    }
  );

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
  }

  return changed;
};

// Main conversion function
const convertAllDirectBoxes = () => {
  console.log("🚀 Starting direct HTML to Box conversion...\n");

  const files = findDirectBoxFiles();
  console.log(`Found ${files.length} files with direct box HTML:\n`);

  let convertedCount = 0;

  for (const file of files) {
    if (convertFile(file)) {
      convertedCount++;
    }
  }

  console.log(`\n📊 Conversion Summary:`);
  console.log(`- Files processed: ${files.length}`);
  console.log(`- Files converted: ${convertedCount}`);
  console.log(`- Files unchanged: ${files.length - convertedCount}`);

  if (convertedCount > 0) {
    console.log("\n✅ Conversion completed successfully!");
    console.log("\n📝 Next steps:");
    console.log("1. Review the changes in the converted files");
    console.log("2. Test the application to ensure everything works");
    console.log("3. All boxes now have fullscreen buttons!");
  } else {
    console.log("\nℹ️ No files needed conversion.");
  }
};

// Run the conversion
convertAllDirectBoxes();
