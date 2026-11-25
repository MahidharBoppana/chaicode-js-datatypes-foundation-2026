/**
 * 🥬 Vegetable Market Shopping Cart - Array Basics
 *
 * Amma has gone to the vegetable market. She has a shopping cart (array).
 * Add items, remove items, check items — all using basic array methods.
 * Build a digital shopping cart for Amma!
 *
 * Methods to explore: .push(), .pop(), .unshift(), .indexOf(),
 *   .includes(), .length, .concat(), Array.isArray()
 *
 * Functions:
 *
 *   1. addToCart(cart, item)
 *      - Use .push() to add an item to the END of the cart.
 *      - Return: new cart length (push returns this automatically).
 *      - If cart is not an Array (use Array.isArray), return -1.
 *      - If item is an empty string or not a string, return cart.length without adding.
 *      - Example: addToCart(["tomato", "onion"], "chilli") => 3
 *
 *   2. addUrgentItem(cart, item)
 *      - Use .unshift() to add an item to the BEGINNING of the cart (it needs to be bought first!).
 *      - Return: updated cart array.
 *      - If cart is not an array, return [].
 *      - If item is not a valid string, return the cart unchanged.
 *      - Example: addUrgentItem(["onion", "chilli"], "coriander") => ["coriander", "onion", "chilli"]
 *
 *   3. removeLastItem(cart)
 *      - Use .pop() to remove the last vegetable.
 *      - Return: the removed item.
 *      - If cart is not an array or is empty, return undefined.
 *      - Example: removeLastItem(["tomato", "onion", "chilli"]) => "chilli"
 *
 *   4. isInCart(cart, item)
 *      - Use .includes() to check whether an item exists in the cart.
 *      - If cart is not an array, return false.
 *      - Example: isInCart(["tomato", "onion"], "onion") => true
 *      - Example: isInCart(["tomato", "onion"], "chilli") => false
 *
 *   5. mergeCarts(cart1, cart2)
 *      - Use .concat() to combine two carts.
 *      - Return: a new merged array.
 *      - If either value is not an array, treat it as an empty array [].
 *      - Example: mergeCarts(["tomato"], ["chilli", "ginger"]) => ["tomato", "chilli", "ginger"]
 *
 * @example
 *   addToCart(["tomato", "onion"], "chilli")       // => 3
 *   addUrgentItem(["onion"], "coriander")           // => ["coriander", "onion"]
 *   removeLastItem(["tomato", "onion", "chilli"])  // => "chilli"
 */


export function addToCart(cart, item) {
  if (!Array.isArray(cart)) return -1
  if (typeof item !== "string" || item.trim() === "") return cart.length

  return cart.push(item)
}

export function addUrgentItem(cart, item) {
  if (!Array.isArray(cart)) return []
  if (typeof item !== "string" || item.trim() === "") return cart

  cart.unshift(item);

  return cart

}

export function removeLastItem(cart) {
  if (!Array.isArray(cart) || cart.length === 0) return undefined

  return cart.pop()
}

export function isInCart(cart, item) {
  if (!Array.isArray(cart) || cart.length === 0) return false

  if (!cart.includes(item)) return false

  return true
}

export function mergeCarts(cart1, cart2) {
  if (!Array.isArray(cart1)) cart1 = []
  if (!Array.isArray(cart2)) cart2 = []

  return cart1.concat(cart2)
}
