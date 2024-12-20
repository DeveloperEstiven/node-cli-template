#!/usr/bin/env node

import chalk from 'chalk'
import { Command } from 'commander'
import figlet from 'figlet'
import { registerHiCommand } from './commands/hi.js'

const program = new Command()

const printBanner = (): void => {
  console.log(
    chalk.blueBright(
      figlet.textSync('my-cli', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  )
}

printBanner()
program.name('my-cli').description('My CLI Tool description').version('1.0.0')

registerHiCommand(program)

program.parse(process.argv)
