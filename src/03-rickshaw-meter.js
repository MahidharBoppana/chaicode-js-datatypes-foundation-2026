/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * Bhaiyya ji owns an auto rickshaw. The fare is calculated using a meter.
 * Different math operations are needed — rounding numbers, finding minimum
 * and maximum values, and parsing numbers from strings.
 * Your job is to build Bhaiyya ji's meter software!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customers provide fares as strings like "152.50".
 *      - Use parseFloat() to convert the string into a number.
 *      - If the result is NaN or fareString is not a string, return -1.
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - Use .toFixed(decimalPlaces) to round the fare.
 *      - The result is a STRING (toFixed returns a string).
 *      - If amount is not a number or decimalPlaces is not a non-negative
 *        integer, return "".
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - Multiply baseFare * surgeMultiplier.
 *      - Use Math.ceil() to always round UP (the auto driver should earn!).
 *      - If baseFare or surgeMultiplier is not a positive number, return 0.
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Use the Rest Parameter (...) to accept a variable number of fares.
 *      - Use Math.min() and Math.max() to find the cheapest and costliest fares.
 *      - Filter out non-number values.
 *      - If no valid number is found, return null.
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200)
 *                 => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - Use parseInt() to convert string kilometer markers into numbers.
 *      - Use Math.abs() to calculate the absolute difference
 *        (direction does not matter).
 *      - If either parsed value is NaN, return -1.
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                     // => 152.5
 *   roundFare(152.567, 2)                   // => "152.57"
 *   findCheapestAndCostliest(150, 80, 200)  // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  if (typeof fareString !== "string" || fareString.trim() === "") {
    return -1
  }

  let parsedValue = parseFloat(fareString)

  if (Number.isNaN(parsedValue)) {
    return -1
  }

  return parsedValue
}

export function roundFare(amount, decimalPlaces) {
  if (typeof amount !== "number" || !Number.isInteger(decimalPlaces) || decimalPlaces < 0) {
    return ""
  }

  return amount.toFixed(decimalPlaces)
}

export function calculateSurge(baseFare, surgeMultiplier) {
  if (typeof baseFare !== "number" || baseFare < 0 || typeof surgeMultiplier !== "number" || surgeMultiplier < 0) {
    return 0
  }

  return Math.ceil(baseFare * surgeMultiplier)
}

export function findCheapestAndCostliest(...fares) {
  const validFares = fares.filter(fare => typeof fare === "number")

  if (validFares.length === 0) return null

  return { cheapest: Math.min(...validFares), costliest: Math.max(...validFares) }
}

export function getDistanceDifference(from, to) {
  const parsedFrom = parseInt(from)
  const parsedTo = parseInt(to)

  if (Number.isNaN(parsedFrom) || Number.isNaN(parsedTo)) {
    return -1
  }

  return Math.abs(parsedFrom - parsedTo);
}
