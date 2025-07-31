#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Find all TSX files that import Widget
const findWidgetFiles = () => {
  const srcDir = path.join(__dirname, "../src");
  const files = [];

  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        const content = fs.readFileSync(fullPath, "utf8");
        if (
          content.includes("import") &&
          content.includes("Widget") &&
          content.includes("from")
        ) {
          files.push(fullPath);
        }
      }
    }
  };

  walkDir(srcDir);
  return files;
};

// Convert Widget to Box in a file
const convertFile = (filePath) => {
  console.log(`Converting: ${path.relative(process.cwd(), filePath)}`);

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // Replace Widget imports with Box imports
  const widgetImportPattern = /import\s+Widget\s+from\s+['"]([^'"]+)['"];?/g;
  content = content.replace(widgetImportPattern, (match, importPath) => {
    // Convert Widget path to Box path
    const newPath = importPath.replace("/Widget/Widget", "/Box/Box");
    changed = true;
    return `import Box from "${newPath}";`;
  });

  // Replace Widget usage with Box usage
  content = content.replace(/<Widget\s+([^>]*)>/g, (match, props) => {
    changed = true;
    return `<Box ${props}>`;
  });

  content = content.replace(/<\/Widget>/g, "</Box>");

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
  }

  return changed;
};

// Main conversion function
const convertAllWidgets = () => {
  console.log("🚀 Starting Widget to Box conversion...\n");

  const files = findWidgetFiles();
  console.log(`Found ${files.length} files with Widget imports:\n`);

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
    console.log("3. Remove the old Widget component if no longer needed");
  } else {
    console.log("\nℹ️ No files needed conversion.");
  }
};

// Run the conversion
convertAllWidgets();
