/**
 *
 *
 * @param {any} str
 * @returns
 */
function convertHTML(str) {
  // &colon;&rpar;

  const map = new Map();
  let newStr = str;
  map.set("&", "&amp;");
  map.set("<", "&lt;");
  map.set(">", "&gt;");
  map.set('"', "&quot;");
  map.set("'", "&apos;");
  for (let i = 0; i < newStr.length; i += 1) {
    if (map.has(newStr[i])) {
      newStr = newStr.replace(newStr[i], map.get(newStr[i]));
    }
  }

  return newStr;
}
module.exports = convertHTML;
convertHTML("Dolce & Gabbana");
