const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://demoqa.com",
    setupNodeEvents(on, config) {
      // plugins para imprimir en la consola del terminal 
      on('task',{
        log(message){
         console.log('Mensaje del console log del task ' + message)
         return null
        } 
     })
    },
  },
});
