# NodeJS CLI Template

This template provides a starting point for building command-line applications using Node.js. It includes basic configurations, a sample command structure, and a development workflow to help you get started quickly.


## Quick Start:

Follow these steps to set up your Node.js CLI project:

1. Clone the repository: 
```bash
git clone https://github.com/DeveloperEstiven/node-cli-template.git my-cli && cd my-cli && code .
```
2. Configure the `package.json`: Add a "bin" section to the package.json to specify the entry point for your CLI:
```json
"bin": {
  "my-cli": "./dist/index.js"
},
```
3. Update the `src/index.ts` file to define the logic for your CLI.

4. Install dependencies: Run the following command to install the necessary dependencies:
`npm install`

5. Link your CLI locally (run this command once to link the CLI to your local environment):
`npm run link`

6. Run the development version: To start your CLI in development mode, use:
`npm run dev`

7. Implement your commands: Create and modify your commands in the `src/commands` directory. You can add as many commands as needed for your application.

#### Happy coding! 🎉


