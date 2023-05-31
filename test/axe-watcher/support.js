import 'mocha'
require('@axe-core/watcher/dist/cypressCommands')

afterEach(() => {
  cy.axeFlush()
})
