import { addNumbers } from './number'

describe('test cases for number.ts', () => {
  test('should return 3', () => {
    expect(addNumbers(1, 2)).toBe(3)
  })
})