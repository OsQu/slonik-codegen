import * as yargs from 'yargs'
import { generate } from './generate'

interface Arguments {
  func: string
}

yargs.command(
  'generate [func]',
  'Generate function',
  y => {
    y.positional('func', { describe: 'Function to generate' })
  },
  (argv: Arguments) => generate(argv.func)
).argv
