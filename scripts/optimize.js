#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const { optimize } = require("svgo");
const readline = require("readline");
const { writeFile } = require("../utils/files");

/**
 * Optimizes SVG files in the given directory and saves the optimized files in the "optimized" directory.
 *
 * @param {string} svgDirectory - The directory containing the SVG files to optimize.
 */
async function optimizeSvgFiles(svgDirectory) {
  // Use glob to find all the SVG files in the directory
  const files = await new Promise((resolve, reject) => {
    glob(svgDirectory, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  let count = 0;
  const totalFiles = files.filter((file) => path.extname(file) === ".svg").length;

  console.log(`\n🔥 Optimizing ${files.length} files...\n`);

  // Loop over each file and optimize it
  for (const file of files) {
    // Check if the file is an SVG file
    if (path.extname(file) === ".svg") {
      const fileContents = await new Promise((resolve, reject) => {
        // Read the file contents
        fs.readFile(file, "utf8", (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });

      // Use SVGO to optimize the file
      const result = optimize(fileContents, {
        path: file,
        multipass: true,
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: [
          { name: "preset-default" },
          "sortAttrs",
          "removeScriptElement",
          "removeDimensions",
          "removeScriptElement",
          "removeDimensions",
        ],
      });

      // Determine the output path for the optimized file
      const optimizedFile = path.basename(file, ".svg") + ".svg";
      const fileDirectory = path.dirname(file).split("/")[2];
      const optimizedDirectory = path.join(__dirname, "../optimized", fileDirectory, optimizedFile);

      // Write the optimized file to disk
      await writeFile(optimizedDirectory, result.data);

      count++;
      const progress = Math.round((count / totalFiles) * 100);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(`⌛️ Optimizing SVG files... ${progress}%`);
      if (count === totalFiles) {
        process.stdout.write("\n");
      }
    }
  }

  console.log(`\n🚀 Successfully optimized ${files.length} files...\n`);
}

optimizeSvgFiles("./assets/**/*.svg");
