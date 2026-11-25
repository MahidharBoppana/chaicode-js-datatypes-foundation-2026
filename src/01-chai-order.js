/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu runs a tea stall outside a college. Customers place orders,
 * and Guddu needs to use string methods to handle those orders.
 *
 * You are Guddu's helper — learn basic string methods and process orders!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 * 1. getChaiOrderLength(order)
 *    - First, remove extra spaces using .trim(), then count characters using .length.
 *    - If the order is not a string, return -1.
 *    - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 * 2. shoutChaiOrder(order)
 *    - Guddu shouts the customer's order in UPPERCASE to his helper.
 *    - First, use .trim(), then .toUpperCase().
 *    - If the order is not a string or is empty after trimming, return "".
 *    - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 * 3. whisperChaiOrder(order)
 *    - When someone secretly places an order, write it in lowercase.
 *    - First, use .trim(), then .toLowerCase().
 *    - If the order is not a string or is empty after trimming, return "".
 *    - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 * 4. hasSpecialIngredient(order, ingredient)
 *    - Check whether the order contains a particular special ingredient.
 *    - Convert both strings to lowercase using .toLowerCase(),
 *      then use .includes().
 *    - If either value is not a string, return false.
 *    - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 * 5. getFirstAndLastChar(order)
 *    - Use .charAt(0) to get the first character and .at(-1)
 *      to get the last character.
 *    - First, remove extra spaces using .trim().
 *    - Return: { first, last }
 *    - If the order is not a string or is empty after trimming, return null.
 *    - Example: getFirstAndLastChar("masala chai")
 *      => { first: "m", last: "i" }
 *
 * @example
 * getChaiOrderLength("  masala chai  ")       // => 11
 * shoutChaiOrder("masala chai")               // => "MASALA CHAI"
 * hasSpecialIngredient("Elaichi Chai", "elaichi") // => true
 */
export function getChaiOrderLength(order) {
  if (typeof order !== "string") {
    return -1;
  }

  if (order === "") {
    return 0
  }

  return order.trim().length
}

export function shoutChaiOrder(order) {
  if (typeof order !== "string" || order === "") {
    return ""
  }

  return order.trim().toUpperCase()
}

export function whisperChaiOrder(order) {
  if (typeof order !== "string" || order === "") {
    return ""
  }

  return order.trim().toLowerCase()
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== "string" || order === "" || typeof ingredient !== "string" || ingredient === "") {
    return false
  }

  return order.trim().toLowerCase().includes(ingredient.toLowerCase())
}

export function getFirstAndLastChar(order) {
  if (typeof order !== "string" || order.trim() === "") { return null }

  return { first: order.trim().charAt(0), last: order.trim().at(-1) }
}
