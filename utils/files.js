const fs = require("fs").promises;
const path = require("path");

/**
 * Checks if a file or directory exists.
 *
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean value indicating whether the file or directory exists.
 */
const isExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};
/**
 * Writes data to a file, creating the file and any directories in the path that do not exist.
 *
 * @param {string} filePath - The path to the file to write.
 * @param {string} data - The data to write to the file.
 * @returns {Promise<void>} - A Promise that resolves when the data has been written to the file.
 * @throws {Error} - If there was an error writing the file.
 */
const writeFile = async (filePath, data) => {
  try {
    const dirname = path.dirname(filePath);
    const exist = await isExists(dirname);
    if (!exist) {
      await fs.mkdir(dirname, { recursive: true });
    }

    await fs.writeFile(filePath, data, "utf8");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  isExists,
  writeFile,
};
