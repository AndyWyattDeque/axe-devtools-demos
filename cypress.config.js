const { defineConfig } = require('cypress')
const { cypressConfig } = require('@axe-core/watcher')
const assert = require('assert')

const { SERVER_URL, API_KEY } = process.env

assert(SERVER_URL, 'SERVER_URL is required')
assert(API_KEY, 'API_KEY is required')

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: API_KEY,
      serverURL: SERVER_URL,
    },
    e2e: {
      specPattern: './test/cypress/*.js',
      supportFile: './test/support.js',
    },
  })
)
