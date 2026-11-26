/**
 * 🏠 Ration Card Registry - Object Basics
 *
 * Build a digital ration card registry for a Gram Panchayat.
 * Family data is stored in an Object. Use Object methods to
 * manage the registry!
 *
 * Data format: registry = {
 *   "RC001": { head: "Ram Prasad", members: 4, type: "BPL" },
 *   "RC002": { head: "Sita Devi", members: 3, type: "APL" },
 *   ...
 * }
 *
 * Methods to explore: Object.keys(), Object.values(), Object.entries(),
 *   .hasOwnProperty(), delete operator
 *
 * Functions:
 *
 *   1. getFamilyNames(registry)
 *      - Use Object.keys() to get all ration card IDs.
 *      - If registry is not a valid object or is null, return [].
 *      - Example: getFamilyNames({"RC001":{...},"RC002":{...}}) => ["RC001", "RC002"]
 *
 *   2. getAllFamilies(registry)
 *      - Use Object.values() to get all family objects.
 *      - If registry is not a valid object or is null, return [].
 *      - Example: getAllFamilies({"RC001":{head:"Ram"}}) => [{head:"Ram"}]
 *
 *   3. getRationCardEntries(registry)
 *      - Use Object.entries() to get [id, family] pairs.
 *      - If registry is not a valid object or is null, return [].
 *      - Example: getRationCardEntries({"RC001":{head:"Ram"}}) => [["RC001",{head:"Ram"}]]
 *
 *   4. hasRationCard(registry, cardId)
 *      - Use .hasOwnProperty() to check whether a specific ration card exists.
 *      - If registry is not a valid object or cardId is not a string, return false.
 *      - Example: hasRationCard({"RC001":{head:"Ram"}}, "RC001") => true
 *      - Example: hasRationCard({"RC001":{head:"Ram"}}, "RC999") => false
 *
 *   5. removeRationCard(registry, cardId)
 *      - Use the delete operator to remove a ration card.
 *      - First, use hasOwnProperty() to check whether the card exists.
 *      - Return true if the card existed and was successfully deleted, false otherwise.
 *      - If registry is not a valid object or cardId is not a string, return false.
 *      - Example: removeRationCard({"RC001":{head:"Ram"}}, "RC001") => true
 *
 * Hint: Use typeof registry === "object" && registry !== null && !Array.isArray(registry)
 *   to check whether the input is a valid object.
 *
 * @example
 *   getFamilyNames({"RC001":{...}})          // => ["RC001"]
 *   hasRationCard({"RC001":{...}}, "RC001") // => true
 *   removeRationCard(registry, "RC001")     // => true
 */
export function getFamilyNames(registry) {
  if (typeof registry !== "object" || registry === null || Array.isArray(registry)) {
    return []
  }

  return Object.keys(registry);
}

export function getAllFamilies(registry) {
  if (typeof registry !== "object" || registry === null || Array.isArray(registry)) {
    return []
  }

  return Object.values(registry)
}

export function getRationCardEntries(registry) {
  if (typeof registry !== "object" || registry === null || Array.isArray(registry)) {
    return []
  }

  return Object.entries(registry)
}

export function hasRationCard(registry, cardId) {
  if (typeof registry !== "object" || registry === null || typeof cardId !== "string") {
    return false
  }

  return registry.hasOwnProperty(cardId);
}

export function removeRationCard(registry, cardId) {
  if (typeof registry !== "object" || registry === null || typeof cardId !== "string") {
    return false
  }

  if (!registry.hasOwnProperty(cardId)) return false

  return delete registry[cardId]
}
