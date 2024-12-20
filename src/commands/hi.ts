import { Command } from 'commander'

export const registerHiCommand = (program: Command): void => {
  program
    .command('hi')
    .description('Hi command description.')
    .action(() => {
      console.log('Hello world!')
    })
}