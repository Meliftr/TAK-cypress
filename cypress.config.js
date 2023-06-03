const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl : 'https://itera-qa.azurewebsites.net'
      // implement node event listeners here
    },
  },
});
