import * as yargs from 'yargs'
import * as fs from 'fs'

import { generate } from './generate'
import { getTemplate } from './util'

interface Arguments {
  func: string
}

yargs.command(
  'generate [func]',
  'Generate function',
  y => {
    y.positional('func', { describe: 'Function to generate' })
  },
  (argv: Arguments) => {
    const template = getTemplate(argv.func)
    const inputDefinition = JSON.parse(fs.readFileSync('/dev/stdin').toString())
    generate(template, inputDefinition)
  }
).argv
