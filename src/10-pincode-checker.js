/**
 * 📦 Pincode Type Checker - Type Checking
 *
 * Build a new system for India Post! Every parcel contains
 * different types of data. You need to check whether a value
 * is a number or a string, an integer or a float, and whether
 * it is valid or not. Explore JavaScript type checking!
 *
 * Methods to explore: typeof, Number.isInteger(), Number.isFinite(),
 *   Number.isNaN(), Array.isArray(), Boolean()
 *
 * Functions:
 *
 *   1. getDataType(value)
 *      - Use typeof, BUT handle special cases:
 *        - typeof null === "object" (JavaScript's famous quirk!) → return "null".
 *        - typeof [] === "object" (Arrays are also objects) → return "array".
 *        - For everything else, return the value of typeof.
 *      - Example: getDataType(42)      => "number"
 *      - Example: getDataType("hello") => "string"
 *      - Example: getDataType(null)    => "null"
 *      - Example: getDataType([1,2])   => "array"
 *
 *   2. isValidParcelWeight(weight)
 *      - Use Number.isFinite() to check whether the weight is a valid finite number.
 *      - The weight must also be positive (> 0).
 *      - Return false for Infinity, NaN, or non-number values.
 *      - Example: isValidParcelWeight(2.5)      => true
 *      - Example: isValidParcelWeight(Infinity) => false
 *      - Example: isValidParcelWeight("5")      => false (it is a string, not a number!)
 *
 *   3. isWholeNumber(value)
 *      - Use Number.isInteger() to check whether the value is a whole number.
 *      - Example: isWholeNumber(42)   => true
 *      - Example: isWholeNumber(42.5) => false
 *      - Example: isWholeNumber("42") => false
 *
 *   4. isNotANumber(value)
 *      - Use Number.isNaN() to check whether the value is specifically NaN.
 *      - NOTE: Number.isNaN() is different from the global isNaN()!
 *        - Number.isNaN("hello") => false (it is a string, not NaN).
 *        - isNaN("hello")        => true (it converts the value first).
 *      - Example: isNotANumber(NaN)       => true
 *      - Example: isNotANumber("hello")   => false
 *      - Example: isNotANumber(undefined) => false
 *
 *   5. isTruthy(value)
 *      - Use Boolean(value) to check whether a value is truthy or falsy.
 *      - Falsy values in JavaScript: false, 0, "", null, undefined, NaN.
 *      - Everything else is truthy (including [], {}, "0", "false")!
 *      - Example: isTruthy("hello") => true
 *      - Example: isTruthy(0)       => false
 *      - Example: isTruthy([])      => true (yes, an empty array is truthy!)
 *
 * @example
 *   getDataType(null)          // => "null"
 *   getDataType([1,2,3])       // => "array"
 *   isValidParcelWeight(2.5)   // => true
 *   isTruthy("")               // => false
 */

export function getDataType(value) {
  if (value === null) return "null"
  if (Array.isArray(value)) return "array"

  return typeof value
}

export function isValidParcelWeight(weight) {
  if (weight <= 0 || !Number.isFinite(weight) || Number.isNaN(weight) || weight === null || weight === undefined || typeof weight !== "number") return false

  return true
}

export function isWholeNumber(value) {
  return Number.isInteger(value)
}

export function isNotANumber(value) {
  return Number.isNaN(value)
}

export function isTruthy(value) {
  return Boolean(value)
}
