/**
 * 📮 Post Office Parcel Service - JSON & Type Conversion
 *
 * Manage parcel data at the Post Office.
 * Sometimes you need to convert data into JSON, sometimes
 * convert JSON back into objects, and sometimes convert
 * one data type into another. Explore type conversion!
 *
 * Methods to explore: JSON.stringify(), JSON.parse(),
 *   String(), Number(), Array.from()
 *
 * Functions:
 *
 *   1. parcelToJSON(parcel)
 *      - Convert the parcel object into a JSON string using JSON.stringify().
 *      - Use try-catch to handle errors (such as circular references).
 *      - If parcel is undefined or an error occurs, return "".
 *      - Example: parcelToJSON({id:"P001", weight:2.5})
 *                 => '{"id":"P001","weight":2.5}'
 *
 *   2. jsonToParcel(jsonString)
 *      - Convert a JSON string back into an object using JSON.parse().
 *      - Use try-catch to handle errors (such as invalid JSON).
 *      - If jsonString is not a string or contains invalid JSON, return null.
 *      - Example: jsonToParcel('{"id":"P001","weight":2.5}')
 *                 => {id:"P001", weight:2.5}
 *
 *   3. convertToString(value)
 *      - Convert any value into a string using String().
 *      - Example: convertToString(42)        => "42"
 *      - Example: convertToString(true)      => "true"
 *      - Example: convertToString(null)      => "null"
 *      - Example: convertToString(undefined) => "undefined"
 *
 *   4. convertToNumber(value)
 *      - Convert a value into a number using Number().
 *      - If the result is NaN, return NaN (the caller will handle it).
 *      - Example: convertToNumber("42.5") => 42.5
 *      - Example: convertToNumber(true)   => 1
 *      - Example: convertToNumber("hello") => NaN
 *      - Example: convertToNumber("")     => 0
 *
 *   5. stringToChars(str)
 *      - Convert a string into an array of characters using Array.from().
 *      - If str is not a string, return [].
 *      - Example: stringToChars("Dak") => ["D", "a", "k"]
 *      - Example: stringToChars("")    => []
 *
 * @example
 *   parcelToJSON({id:"P001"})          // => '{"id":"P001"}'
 *   jsonToParcel('{"id":"P001"}')      // => {id:"P001"}
 *   convertToString(42)                // => "42"
 *   stringToChars("Dak")               // => ["D", "a", "k"]
 */

export function parcelToJSON(parcel) {
  try {
    if (parcel === undefined) return ""
    return JSON.stringify(parcel)
  } catch (error) {
    if (error) return ""
  }
}

export function jsonToParcel(jsonString) {
  try {
    if (typeof jsonString !== "string" || jsonString.trim() === "") return null
    return JSON.parse(jsonString)
  } catch (error) {
    if (error) return null
  }
}

export function convertToString(value) {
  return String(value)
}

export function convertToNumber(value) {
  if (typeof Number(value) === "NaN") return "NaN"

  return Number(value)
}

export function stringToChars(str) {
  if (typeof str !== "string") return []

  return Array.from(str)
}
