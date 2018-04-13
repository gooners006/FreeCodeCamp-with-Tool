/**
 *
 *
 * @param {any} str
 * @returns
 */
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // if 2 words next to each other doesn't have space then make it
  let newStr = str;
  newStr = newStr.replace(/([a-z])([A-Z])/g, "$1 $2");
  // replace every spaces and underscores with dashes, then toLowerCase
  return newStr.replace(/\s+|_+/g, "-").toLowerCase();
}

export default spinalCase;

spinalCase("AllThe-small Things");
