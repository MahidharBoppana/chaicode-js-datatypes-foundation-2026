/**
 * 🍃 Paan Shop Menu - Object Transformation
 *
 * Khalil Bhai owns a famous paan shop in Old Delhi.
 * Build a menu system that can merge, freeze, and
 * transform objects. Explore object transformations!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Create a NEW order object using Object.assign({}, basePaan, customizations).
 *      - DO NOT mutate the original basePaan object!
 *      - If basePaan is not a valid object or is null, return {}.
 *      - If customizations is not a valid object, return a copy of basePaan only.
 *      - Example: createPaanOrder({type:"sweet",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"sweet", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Make the menu immutable using Object.freeze().
 *      - Return: frozen object.
 *      - If menu is not a valid object or is null, return {}.
 *      - After freezing, modifications will not work!
 *      - Example: const frozen = freezeMenu({sweet:30}); frozen.sweet = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Use Object.entries() to get [key, value] pairs.
 *      - Add the increase amount to every price.
 *      - Use Object.fromEntries() to convert the pairs back into an object.
 *      - Return: a NEW object (do not modify the original!).
 *      - If menu is not a valid object or increase is not a number, return {}.
 *      - Example: updatePrices({sweet:30, plain:20}, 10) => {sweet:40, plain:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Merge using the spread operator {...regularMenu, ...specialsMenu}.
 *      - Values from specialsMenu will override regularMenu if they have the same key.
 *      - Return: a NEW merged object.
 *      - If either input is not a valid object, treat it as an empty {}.
 *      - Example: mergeDailySpecials({sweet:30}, {chocolate:60, sweet:40})
 *                 => {sweet:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"sweet"}, {extra:"gulkand"}) // => {type:"sweet",extra:"gulkand"}
 *   updatePrices({sweet:30, plain:20}, 10)            // => {sweet:40, plain:30}
 */
export function createPaanOrder(basePaan, customizations) {
  if (typeof basePaan !== "object" || basePaan === null) return {}

  if (typeof customizations !== "object") return { ...basePaan }

  return Object.assign({}, basePaan, customizations)
}

export function freezeMenu(menu) {
  if (typeof menu !== "object" || menu === null) return {}

  return Object.freeze(menu)
}

export function updatePrices(menu, increase) {
  if (typeof menu !== "object" || menu === null || typeof increase !== "number") return {}

  const entries = Object.entries(menu)

  const newMenu = entries.map(([key, value]) => {
    return [key, value + increase]
  })

  return Object.fromEntries(newMenu)
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  if (typeof regularMenu !== "object" || regularMenu === null) regularMenu = {}
  if (typeof specialsMenu !== "object" || specialsMenu === null) specialsMenu = {}

  return { ...regularMenu, ...specialsMenu }
}
