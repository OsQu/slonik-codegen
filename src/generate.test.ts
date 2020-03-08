import { join } from 'path'
import { generate, DataType } from './generate'
import { getTemplate } from './util'

describe('generate', () => {
  test('generating DAO name from table name', async () => {
    const content = await generate(testTemplate('dao'), [
      { table_name: 'foo_bars', column_name: 'abc', data_type: DataType.text }
    ])
    expect(content).toEqual('fooBars')
  })
})

function testTemplate(template: string): string {
  return getTemplate(join('..', 'test_templates', template))
}
