/**
 * 🏪 Grocery Store Bill - Array Transform
 *
 * Gupta ji owns a grocery store. He needs to manage monthly accounts —
 * calculate the total price of items, sort items, and format bills.
 * Make Gupta ji's shop digital using array transformation methods!
 *
 * Data format: items = [
 *   { name: "Atta", price: 40, qty: 2 },
 *   { name: "Daal", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 *   1. getItemNames(items)
 *      - Use .map() to extract only the item names.
 *      - If items is not an array, return [].
 *      - Example: getItemNames([{name:"Atta",price:40,qty:2}]) => ["Atta"]
 *
 *   2. getAffordableItems(items, maxPrice)
 *      - Use .filter() to get items whose price is <= maxPrice.
 *      - If items is not an array or maxPrice is not a number, return [].
 *      - Example: getAffordableItems([{name:"Atta",price:40},{name:"Ghee",price:500}], 100)
 *                 => [{name:"Atta",price:40}]
 *
 *   3. calculateTotal(items)
 *      - Use .reduce() to calculate the sum of (price * qty).
 *      - If items is not an array or is empty, return 0.
 *      - Example: calculateTotal([{name:"Atta",price:40,qty:2},{name:"Daal",price:80,qty:1}])
 *                 => 160
 *
 *   4. sortByPrice(items, ascending)
 *      - Use [...items].sort() to return a NEW sorted array (do not modify the original!).
 *      - ascending = true  => low to high.
 *      - ascending = false => high to low.
 *      - If items is not an array, return [].
 *      - Example: sortByPrice([{name:"Ghee",price:500},{name:"Atta",price:40}], true)
 *                 => [{name:"Atta",price:40},{name:"Ghee",price:500}]
 *
 *   5. formatBill(items)
 *      - Use .map() to format each item as "name x qty = Rs.total".
 *      - Then use .join("\n") to create a multi-line bill.
 *      - If items is not an array or is empty, return "".
 *      - Example: formatBill([{name:"Atta",price:40,qty:2}]) => "Atta x 2 = Rs.80"
 *
 * @example
 *   getItemNames([{name:"Atta",...}])          // => ["Atta"]
 *   calculateTotal([{price:40,qty:2},...])     // => 160
 *   formatBill([{name:"Atta",price:40,qty:2}]) // => "Atta x 2 = Rs.80"
 */

export function getItemNames(items) {
  if (!Array.isArray(items)) return []

  return items.map(item => item.name)
}

export function getAffordableItems(items, maxPrice) {
  if (!Array.isArray(items) || typeof maxPrice !== "number") return []

  return items.filter(item => item.price <= maxPrice)
}

export function calculateTotal(items) {
  if (!Array.isArray(items) || items.length === 0) return 0

  return items.reduce((acc, item) => acc + (item.price * item.qty), 0)
}

export function sortByPrice(items, ascending) {
  if (!Array.isArray(items)) return []

  const sortedArray = [...items].sort();

  if (ascending) {
    return sortedArray.sort((a, b) => a.price - b.price)
  }

  return sortedArray.sort((a, b) => b.price - a.price)
}

export function formatBill(items) {
  if (!Array.isArray(items) || items.length === 0) return "";

  const formattedItems = items.map(
    (item) => `${ item.name } x ${ item.qty } = Rs.${ item.price * item.qty }`
  );

  return formattedItems.join("\n");
}