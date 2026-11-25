/**
 * 🎨 Rangoli Border Maker - String Transform
 *
 * Diwali is coming! Priya is creating digital rangoli designs in her terminal.
 * She needs to use string transformation methods to create patterns.
 * Your job is to help Priya!
 *
 * Methods to explore: .slice(), .split(), .join(), .replace(),
 *   .replaceAll(), .repeat()
 *
 * Functions:
 *
 *   1. repeatPattern(pattern, times)
 *      - Use .repeat(times) to repeat the pattern.
 *      - If pattern is not a string or times is not a positive integer, return ""
 *      - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 *   2. extractRangoliCenter(design, start, end)
 *      - Use .slice(start, end) to extract the center part of the rangoli.
 *      - If design is not a string, return ""
 *      - If start/end are not numbers, return ""
 *      - Example: extractRangoliCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 *   3. splitAndJoinRangoli(colorString, oldSep, newSep)
 *      - Use .split(oldSep) to separate the colors.
 *      - Use .join(newSep) to join them again.
 *      - Change the separator between the colors.
 *      - If colorString is not a string, return ""
 *      - Example: splitAndJoinRangoli("red,blue,green", ",", " | ") => "red | blue | green"
 *
 *   4. replaceRangoliColor(design, oldColor, newColor)
 *      - Use .replaceAll() to replace one color with another.
 *      - If any parameter is not a string, return ""
 *      - Example: replaceRangoliColor("red-blue-red-green-red", "red", "pink")
 *                 => "pink-blue-pink-green-pink"
 *
 *   5. makeRangoliBorder(char, length)
 *      - Use .repeat() to repeat the character many times.
 *      - Then use .slice(0, length) to create a border of exact length.
 *      - If char is not a string or length is not a positive number, return ""
 *      - Example: makeRangoliBorder("*", 5) => "*****"
 *      - Example: makeRangoliBorder("=-", 7) => "=-=-=-="
 *
 * @example
 *   repeatPattern("*-", 4)                     // => "*-*-*-*-"
 *   extractRangoliCenter("***LOTUS***", 3, 8)   // => "LOTUS"
 *   splitAndJoinRangoli("red,blue", ",", "-")   // => "red-blue"
 */
export function repeatPattern(pattern, times) {
  if (
    typeof pattern !== "string" ||
    pattern.trim() === "" ||
    typeof times !== "number" ||
    !Number.isInteger(times) ||
    times <= 0
  ) {
    return "";
  }

  return pattern.trim().repeat(times);
}

export function extractRangoliCenter(design, start, end) {
  if (
    typeof design !== "string" ||
    design.trim() === "" ||
    typeof start !== "number" ||
    start < 0 ||
    typeof end !== "number" ||
    end < 0
  ) {
    return "";
  }

  return design.trim().slice(start, end);
}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  if (
    typeof colorString !== "string" ||
    colorString.trim() === ""
  ) {
    return "";
  }

  let splitedStr = colorString.split(oldSep);
  return splitedStr.join(newSep)

}

export function replaceRangoliColor(design, oldColor, newColor) {
  if (
    typeof design !== "string" || design.trim() === ""
    || typeof oldColor !== "string" || oldColor.trim() === ""
    || typeof newColor !== "string" || newColor.trim() === ""
  ) {
    return "";
  }

  return design.trim().replaceAll(oldColor, newColor)
}

export function makeRangoliBorder(char, length) {
  if (typeof char !== "string" || char.trim() === "" || typeof length !== "number" || length < 0) {
    return ""
  }

  return char.trim().repeat(length).slice(0, length);
}
