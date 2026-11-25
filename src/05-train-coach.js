/**
 * 🚂 Train Coach Finder - Array Search & Check
 *
 * We need to find passengers on an Indian Railways train!
 * Search the passenger list — who is there, who is not,
 * and whether everyone is confirmed. This is a tour of array search methods!
 *
 * Data format: passengers = [
 *   { name: "Rahul", coach: "S5", seat: 42, status: "confirmed" },
 *   { name: "Priya", coach: "S3", seat: 15, status: "waitlisted" },
 *   ...
 * ]
 *
 * Methods to explore: .find(), .findIndex(), .some(), .every(), .filter()
 *
 * Functions:
 *
 *   1. findPassenger(passengers, name)
 *      - Use .find() to search for a passenger object by name (case-insensitive).
 *      - If passengers is not an array or name is not a string, return undefined.
 *      - Example: findPassenger([{name:"Rahul",coach:"S5",seat:42,status:"confirmed"}], "rahul")
 *                 => {name:"Rahul", coach:"S5", seat:42, status:"confirmed"}
 *
 *   2. getPassengerIndex(passengers, name)
 *      - Use .findIndex() to get the passenger's position (case-insensitive).
 *      - If passengers is not an array or name is not a string, return -1.
 *      - Example: getPassengerIndex([{name:"Rahul"}, {name:"Priya"}], "Priya") => 1
 *
 *   3. isAnyWaitlisted(passengers)
 *      - Use .some() to check whether any passenger has "waitlisted" status.
 *      - If passengers is not an array or is empty, return false.
 *      - Example: isAnyWaitlisted([{status:"confirmed"}, {status:"waitlisted"}]) => true
 *
 *   4. areAllConfirmed(passengers)
 *      - Use .every() to check whether ALL passengers have "confirmed" status.
 *      - If passengers is not an array or is empty, return false.
 *      - Example: areAllConfirmed([{status:"confirmed"}, {status:"confirmed"}]) => true
 *
 *   5. getWaitlistedPassengers(passengers)
 *      - Use .filter() to return only "waitlisted" passengers.
 *      - If passengers is not an array, return [].
 *      - Example: getWaitlistedPassengers([{name:"A",status:"confirmed"},{name:"B",status:"waitlisted"}])
 *                 => [{name:"B", status:"waitlisted"}]
 *
 * @example
 *   findPassenger(passengers, "Rahul")   // => { name: "Rahul", ... }
 *   isAnyWaitlisted(passengers)          // => true/false
 *   areAllConfirmed(passengers)          // => true/false
 */

export function findPassenger(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== "string" || name === "") return undefined

  return passengers.find(passenger => passenger.name.toLowerCase() === name.toLowerCase())
}

export function getPassengerIndex(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== "string" || name === "") return -1

  return passengers.findIndex(passenger => passenger.name.toLowerCase() === name.toLowerCase())
}

export function isAnyWaitlisted(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return false

  return passengers.some(passenger => passenger.status === "waitlisted")
}

export function areAllConfirmed(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return false

  return passengers.every(passenger => passenger.status === "confirmed")
}

export function getWaitlistedPassengers(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return []

  return passengers.filter(passenger => passenger.status === "waitlisted") || []
}
