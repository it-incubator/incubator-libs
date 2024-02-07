import os from "os";
import fs from "fs-extra";
import path from "path";


/**
 * Converts string to PascalCase
 */
export const toPascalCase = (str: string) => {
  return `${str}`
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(
      /\s+(.)(\w*)/g,
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(/\w/, (s) => s.toUpperCase());
};

export const createIndex = ({
  componentsDirectoryPath,
  indexDirectoryPath,
  indexFileName
}: {
  componentsDirectoryPath: string;
  indexDirectoryPath: string;
  indexFileName: string;
}) => {
  let indexContent = "";
  fs.readdirSync(componentsDirectoryPath).forEach((componentFileName) => {
    // Convert name to pascal case
    const componentName = toPascalCase(
      componentFileName.substr(0, componentFileName.indexOf(".")) ||
        componentFileName
    );

    // Compute relative path from index file to component file
    const relativePathToComponent = path.relative(
      indexDirectoryPath,
      path.resolve(componentsDirectoryPath, componentName)
    ).replaceAll('\\', '/');

    // Export statement
    const componentExport = `export { default as ${componentName} } from "./${relativePathToComponent}";`;

    indexContent += componentExport + os.EOL;
  });

  // Write the content to file system
  fs.writeFileSync(
    path.resolve(indexDirectoryPath, indexFileName),
    indexContent
  );
};
