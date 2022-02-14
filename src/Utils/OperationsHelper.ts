/**
 * Sum method
 * @param {number} leftAtt task obj attribute
 * @param {number} rightAtt task obj attribute
 */
export const addition = (leftAtt: number, rightAtt: number): number => leftAtt + rightAtt

/**
 * subtraction method
 * @param {number} leftAtt task obj attribute
 * @param {number} rightAtt task obj attribute
 */
export const subtraction = (leftAtt: number, rightAtt: number): number => leftAtt - rightAtt

/**
 * multiplication method
 * @param {number} leftAtt task obj attribute
 * @param {number} rightAtt task obj attribute
 */
export const multiplication = (leftAtt: number, rightAtt: number): number => leftAtt * rightAtt

/**
 * division method
 * @param {number} leftAtt task obj attribute
 * @param {number} rightAtt task obj attribute
 */
export const division = (leftAtt: number, rightAtt: number): number => leftAtt / rightAtt

/**
 * remainder method
 * @param {number} leftAtt task obj attribute
 * @param {number} rightAtt task obj attribute
 */
export const remainder = (leftAtt: number, rightAtt: number): number => leftAtt % rightAtt

/**
 * function helper that handles operations
 * @param {number} leftAtt task obj attribute
 * @param {number} rightAtt task obj attribute
 * @param {string} ops task obj attribute
 */
export const operationsHandler = (leftAtt: number, rightAtt: number, ops: string): number => {
  const operations = {
    addition: addition(leftAtt, rightAtt),
    subtraction: subtraction(leftAtt, rightAtt),
    multiplication: multiplication(leftAtt, rightAtt),
    division: division(leftAtt, rightAtt),
    remainder: remainder(leftAtt, rightAtt)
  }
  const result = operations[ops]
  return result
}
