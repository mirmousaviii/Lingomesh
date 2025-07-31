#!/usr/bin/env node

/**
 * Migration script to convert Widget components to Box components
 *
 * This script helps migrate all existing widget components to use the new unified Box component.
 * It will:
 * 1. Find all files that import Widget
 * 2. Replace Widget imports with Box imports
 * 3. Update component usage from Widget to Box
 * 4. Preserve all existing props and functionality
 */

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Configuration
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SRC_DIR = path.join(__dirname, "../src");
const WIDGET_IMPORT_PATTERN =
  /import\s+Widget\s+from\s+['"]\.\.\/\.\.\/ui\/Widget\/Widget['"];?/g;
const WIDGET_USAGE_PATTERN = /<Widget\s+([^>]*)>/g;
const WIDGET_CLOSING_PATTERN = /<\/Widget>/g;

// Box import replacement
const BOX_IMPORT = "import Box from '../../ui/Box/Box';";

// Function to find all TypeScript/TSX files
async function findTsxFiles() {
  const files = await glob("**/*.{ts,tsx}", { cwd: SRC_DIR });
  return Array.isArray(files) ? files : [];
}

// Function to read file content
function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

// Function to write file content
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

// Function to replace Widget imports with Box imports
function replaceWidgetImports(content) {
  return content.replace(WIDGET_IMPORT_PATTERN, BOX_IMPORT);
}

// Function to replace Widget usage with Box usage
function replaceWidgetUsage(content) {
  // Replace opening tags
  content = content.replace(WIDGET_USAGE_PATTERN, (match, props) => {
    return `<Box ${props}>`;
  });

  // Replace closing tags
  content = content.replace(WIDGET_CLOSING_PATTERN, "</Box>");

  return content;
}

// Function to process a single file
function processFile(filePath) {
  const fullPath = path.join(SRC_DIR, filePath);
  const content = readFile(fullPath);

  let updatedContent = content;
  let hasChanges = false;

  // Check if file contains Widget imports
  if (WIDGET_IMPORT_PATTERN.test(content)) {
    updatedContent = replaceWidgetImports(updatedContent);
    hasChanges = true;
    console.log(`✅ Updated imports in ${filePath}`);
  }

  // Check if file contains Widget usage
  if (
    WIDGET_USAGE_PATTERN.test(updatedContent) ||
    WIDGET_CLOSING_PATTERN.test(updatedContent)
  ) {
    updatedContent = replaceWidgetUsage(updatedContent);
    hasChanges = true;
    console.log(`✅ Updated Widget usage in ${filePath}`);
  }

  // Write changes if any
  if (hasChanges) {
    writeFile(fullPath, updatedContent);
    console.log(`📝 Updated ${filePath}`);
  }

  return hasChanges;
}

// Main migration function
async function migrateToBox() {
  console.log("🚀 Starting migration from Widget to Box components...\n");

  try {
    const files = await findTsxFiles();
    let processedCount = 0;
    let changedCount = 0;

    for (const file of files) {
      processedCount++;
      const hasChanges = processFile(file);
      if (hasChanges) {
        changedCount++;
      }
    }

    console.log(`\n📊 Migration Summary:`);
    console.log(`- Files processed: ${processedCount}`);
    console.log(`- Files changed: ${changedCount}`);
    console.log(`- Files unchanged: ${processedCount - changedCount}`);

    if (changedCount > 0) {
      console.log("\n✅ Migration completed successfully!");
      console.log("\n📝 Next steps:");
      console.log("1. Review the changes in the modified files");
      console.log(
        "2. Test the application to ensure everything works correctly"
      );
      console.log("3. Remove the old Widget component if no longer needed");
      console.log(
        "4. Update any remaining references to Widget in your codebase"
      );
    } else {
      console.log("\nℹ️ No files needed migration.");
    }
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration if this script is executed directly
migrateToBox();
