import { normalize, join } from 'path'

export function getTemplate(func: string): string {
  return normalize(join(__dirname, '../templates/', `${func}.ts.dot`))
}
