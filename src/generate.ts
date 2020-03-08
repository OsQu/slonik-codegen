export enum DataType {
  text = 'text'
}

export interface ColumnDefinition {
  table_name: string
  column_name: string
  data_type: DataType
}

export async function generate(
  template: string,
  columnDefinitions: ColumnDefinition[]
): Promise<string> {
  console.log(template)
  return 'FOO'
}
