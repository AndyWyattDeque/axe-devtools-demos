const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: './test/cypress/*.js',
    supportFile: false,
  },
})
