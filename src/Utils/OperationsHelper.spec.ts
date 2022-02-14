import * as HelperOps from './OperationsHelper'

describe('helper operations', () => {
  test('should return correct value from operations examples', () => {
    const addition = HelperOps.addition(-5, 2)
    const subtraction = HelperOps.subtraction(-5, 2)
    const multiplication = HelperOps.multiplication(-5, 2)
    const division = HelperOps.division(-6, 2)
    const remainder = HelperOps.remainder(10, 2)

    expect(addition).toBe(-3)
    expect(subtraction).toBe(-7)
    expect(multiplication).toBe(-10)
    expect(division).toBe(-3)
    expect(remainder).toBe(0)
  })
  test('should return correct operation value', () => {
    const paramExample = {
      left: 999,
      right: 999,
      ops: 'division'
    }
    const { left, right, ops } = paramExample
    const sut = HelperOps.operationsHandler(left, right, ops)
    expect(sut).toBe(1)
  })
})
