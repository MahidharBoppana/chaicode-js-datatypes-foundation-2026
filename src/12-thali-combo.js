/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Build a combo platter system for a Grand Indian Thali restaurant.
 * Combine String, Number, Array, and Object methods to create a complete
 * thali management system. This is your capstone challenge — combine everything!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Use template literals, .join(", "), .toUpperCase(), and .toFixed(2).
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - Convert the name to UPPERCASE and format the price to 2 decimal places.
 *      - If isVeg is true, use "Veg"; if false, use "Non-Veg".
 *      - If thali is not a valid object or required fields are missing, return "".
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean).
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Calculate statistics for an array of thali objects.
 *      - Use .filter() to count vegetarian and non-vegetarian thalis.
 *      - Use .reduce() to calculate the average price.
 *      - Use Math.min() and Math.max() to find the cheapest and most expensive thalis.
 *      - Use .map() to get all thali names.
 *      - Return: {
 *          totalThalis,
 *          vegCount,
 *          nonVegCount,
 *          avgPrice (2 decimal string),
 *          cheapest (number),
 *          costliest (number),
 *          names (array)
 *        }
 *      - If thalis is not an array or is empty, return null.
 *
 *   3. searchThaliMenu(thalis, query)
 *      - Use .filter() + .includes() to search the menu (case-insensitive).
 *      - A thali matches if its name or any of its items includes the query.
 *      - If thalis is not an array or query is not a string, return [].
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in their name or items.
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Generate a receipt using template literals, .map(), .join("\n"), and .reduce().
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - Convert customerName to UPPERCASE.
 *      - If customerName is not a string or thalis is not a valid, non-empty array, return "".
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */


export function createThaliDescription(thali) {
  if (
    thali === null ||
    typeof thali !== "object" ||
    thali.name.trim() === "" ||
    !Array.isArray(thali.items) ||
    thali.items.length === 0 ||
    typeof thali.price !== "number" ||
    typeof thali.isVeg !== "boolean"
  )
    return "";

  return `${ thali.name.toUpperCase() } (${ thali.isVeg ? "Veg" : "Non-Veg" }) - Items: ${ thali.items.join(", ") } - Rs.${ thali.price.toFixed(2) }`;
}

export function getThaliStats(thalis) {
  if (!Array.isArray(thalis) || thalis.length === 0) return null

  let totalThalis = thalis.length
  let vegCount = thalis.filter((thali) => thali.isVeg).length
  let nonVegCount = thalis.filter((thali) => !thali.isVeg).length
  let totalPrices = thalis.reduce((acc, thali) => acc + thali.price, 0)

  let avgPrice = (totalPrices / totalThalis).toFixed(2);
  let cheapest = Math.min(...thalis.map((thali) => thali.price))
  let costliest = Math.max(...thalis.map((thali) => thali.price))
  let names = thalis.map((thali) => thali.name)

  return {
    totalThalis,
    vegCount,
    nonVegCount,
    avgPrice,
    cheapest,
    costliest,
    names
  }

}

export function searchThaliMenu(thalis, query) {
  if (
    !Array.isArray(thalis) || typeof query !== "string" ||
    query.trim() === ""
  ) return []

  let search = query.trim().toLowerCase();

  return thalis.filter(
    (thali) => thali.name.toLowerCase().includes(search) ||
      thali.items.some((item) => item.toLowerCase().includes(search))
  )
}

export function generateThaliReceipt(customerName, thalis) {
  if (typeof customerName !== "string" || !Array.isArray(thalis) || thalis.length === 0) return ""
  const total = thalis.reduce((acc, thali) => acc + thali.price, 0);
  const count = thalis.length

  return `THALI RECEIPT
---
Customer: ${ customerName.toUpperCase() }
${ thalis.map((thali) => `- ${ thali.name } x Rs.${ thali.price }`).join("\n") }
---
Total: Rs.${ total }
Items: ${ count }`;
}
