#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { transform } = require("@svgr/core");
const glob = require("glob");

const {
  convertToPascalCase,
  getFilenameWithoutExtension,
  removeLeadingZero,
} = require("../utils/string");

/**
 * An array of export statements for the generated components.
 * @type {string[]}
 */
const exportStatements = [];

/**
 * Generates SVG components from optimized SVG files.
 * @async
 * @function generateSvgComponents
 * @returns {Promise<void>}
 */
async function generateSvgComponents() {
  const optimizedFolderPath = path.join(__dirname, "../optimized");
  const svgFiles = glob.sync(`${optimizedFolderPath}/**/*.svg`);

  console.log(`\n⌛️ Generating ${svgFiles.length} components...\n`);

  for (const file of svgFiles) {
    const fileContents = fs.readFileSync(file, "utf8");
    const filename = convertToPascalCase(getFilenameWithoutExtension(file));
    const componentName = removeLeadingZero(`Icon${filename}`);
    const tsxCode = await transform(
      fileContents,
      {
        icon: false,
        replaceAttrValues: { "#000": "{props.color || 'currentColor'}" },
        svgProps: {
          width: 24,
          height: 24,
        },
        typescript: true,
      },
      { componentName }
    );

    await fs.promises.mkdir(path.join(__dirname, "../generated/icons"), {
      recursive: true,
    });
    const outputPath = path.join(__dirname, `../generated/icons/${componentName}.tsx`);
    await fs.promises.writeFile(outputPath, tsxCode);

    exportStatements.push(
      `export { default as ${componentName} } from './icons/${componentName}';`
    );
  }

  const indexFilePath = path.join(__dirname, "../generated/index.tsx");
  const indexFileContent = exportStatements.join("\n");
  await fs.promises.writeFile(indexFilePath, indexFileContent);

  console.log(
    `🚀 Finished generating ${
      exportStatements.length
    } components and exporting them to ${path.relative(process.cwd(), indexFilePath)}\n`
  );
}

generateSvgComponents();
