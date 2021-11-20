/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  if (words.length === 0) return "";
  let [shortestWord] = words.sort((a, b) => a.length - b.length);

  while (!words.every((str) => str.startsWith(shortestWord))) {
    if (shortestWord.length === 0) return "";
    shortestWord = shortestWord.slice(0, -1);
  }
  return shortestWord;
}

console.log(result(words));
