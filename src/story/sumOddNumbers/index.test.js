const solution = require('./index.js')

describe('sumOddNumbers', () => {
  it('For n=1 should return 1', () => {
    expect(solution(1)).toBe(1)
  })
  it('For n=42 should return 74088', () => {
    expect(solution(42)).toBe(74088)
  })
  it('For n=207 should return 8869743', () => {
    expect(solution(207)).toBe(8869743)    
  })
  it('For n=245 should return 14706125', () => {
    expect(solution(245)).toBe(14706125)
  })
  it('For n=342 should return 40001688', () => {
    expect(solution(342)).toBe(40001688)
  })
  it('For n=101 should return 1030301', () => {
    expect(solution(101)).toBe(1030301)
  })
  it('For n=346 should return 41421736', () => {
    expect(solution(346)).toBe(41421736)
  })
  it('For n=264 should return 18399744', () => {
    expect(solution(264)).toBe(18399744)
  })
  it('For n=117 should return 1601613', () => {
    expect(solution(117)).toBe(1601613)
  })
})
