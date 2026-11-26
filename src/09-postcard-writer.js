/**
 * 💌 Indian Postcard Writer - Advanced Strings
 *
 * Write a digital postcard to Grandma. Create messages using
 * template literals, validate addresses, format text, and
 * write postcards using advanced string methods!
 *
 * Methods to explore: template literals (`${}`), .startsWith(),
 *   .endsWith(), .padStart(), .padEnd(), .match()
 *
 * Functions:
 *
 *   1. writePostcard(sender, receiver, message)
 *      - Create a formatted postcard using template literals:
 *        "Dear {receiver},\n\n{message}\n\nYours,\n{sender}"
 *      - If any parameter is not a string or is empty after trimming, return "".
 *      - Example: writePostcard("Guddu", "Grandma", "We are doing well")
 *                 => "Dear Grandma,\n\nWe are doing well\n\nYours,\nGuddu"
 *
 *   2. isValidPincode(code)
 *      - Indian PIN codes must contain 6 digits and cannot start with "0".
 *      - Use .startsWith("0") to check that the code does not start with "0".
 *      - Check that .length === 6.
 *      - Every character must be a digit (use /^\d+$/ regex test or check each character).
 *      - If code is not a string, return false.
 *      - Example: isValidPincode("400001") => true
 *      - Example: isValidPincode("012345") => false
 *
 *   3. formatPostcardField(label, value, width)
 *      - Use label.padEnd(width) + ": " + value to align fields.
 *      - Default width is 12.
 *      - If width is provided, use it instead of 12.
 *      - If label or value is not a string, return "".
 *      - Example: formatPostcardField("From", "Guddu") => "From       : Guddu"
 *      - Example: formatPostcardField("To", "Grandma", 8) => "To      : Grandma"
 *
 *   4. isFromState(address, stateCode)
 *      - Use .endsWith() to check whether the address ends with a specific state code.
 *      - If address or stateCode is not a string, return false.
 *      - Example: isFromState("Guddu, Lucknow, UP", "UP") => true
 *      - Example: isFromState("Priya, Mumbai, MH", "UP") => false
 *
 *   5. countVowels(message)
 *      - Use .match(/[aeiouAEIOU]/g) to find all vowels.
 *      - Return: the count (length of the match result, or 0 if it is null).
 *      - If message is not a string, return 0.
 *      - Example: countVowels("Namaste India") => 6
 *
 * @example
 *   writePostcard("Guddu", "Grandma", "We are doing well")
 *   isValidPincode("400001")  // => true
 *   countVowels("Namaste")    // => 3
 */


export function writePostcard(sender, receiver, message) {
  if (typeof sender !== "string" || typeof receiver !== "string" || typeof message !== "string" ||
    sender.trim() === "" || receiver.trim() === "" || message.trim() === ""
  ) return ""

  return `Priy ${ receiver },\n\n${ message }\n\nAapka/Aapki,\n${ sender }`
}

export function isValidPincode(code) {
  if (typeof code !== "string" || code.startsWith("0") || code.length !== 6) return false

  if (!/^\d+$/.test(code)) return false
  else return true
}

export function formatPostcardField(label, value, width) {
  if (typeof label !== "string" || typeof value !== "string") return ""

  return label.padEnd(width || 12) + ": " + value
}

export function isFromState(address, stateCode) {
  if (typeof address !== "string" || typeof stateCode !== "string") return false

  return address.endsWith(stateCode)
}

export function countVowels(message) {
  if (typeof message !== "string" || message.trim() === "") return 0

  return message.match(/[aeiouAEIOU]/g)?.length || 0
}
