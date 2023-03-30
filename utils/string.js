/**
 * Get the filename without its extension from a path string.
 *
 * @param {string} string - The path string to process.
 * @returns {string} - The filename without its extension.
 */
function getFilenameWithoutExtension(string) {
  return string.split(".")[0].split("/").pop();
}

/**
 * Convert a hyphen-separated string to PascalCase.
 *
 * @param {string} string - The string to convert.
 * @returns {string} - The PascalCase version of the string.
 */
function convertToPascalCase(string) {
  let words = string.split("-");

  // capitalize the first letter of each word and join them
  let pascalCase = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

  return pascalCase;
}

/**
 * Remove leading zeros from a string.
 *
 * @param {string} str - The string to remove leading zeros from.
 * @returns {string} - The string without leading zeros.
 */
function removeLeadingZero(str) {
  return str.replace(/^0+/, "").replace(/^(\D*)0+(?=\d)/, "$1");
}

module.exports = {
  getFilenameWithoutExtension,
  convertToPascalCase,
  removeLeadingZero,
};
