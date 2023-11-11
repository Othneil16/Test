  //IMPORT THE EVENT MODULE
  const eventEmitter = require('events');
  
  //EXTEND A CLASS TO THE eventEmitter
  class myEmitter extends eventEmitter{}
   
  //CREATE AN OBJECT OF THE CLASS myEmitter
  const emittedObject = new myEmitter();
  
  emittedObject.on("lightUp", () => {
      console.log("Up NEPA");
  });
  
  emittedObject.emit("lghtUp");