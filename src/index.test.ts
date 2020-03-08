import { main } from './index'

describe('main()', () => {
  test('returning 42', () => {
    const mainResult = main()
    expect(mainResult).toEqual(42)
  })
})
