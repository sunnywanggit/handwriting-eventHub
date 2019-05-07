import EventHub  from "../src/index";

const eventHub = new EventHub()

//第一个断言
console.assert(eventHub instanceof Object()  === true,
    'eventHub 是一个对象')

eventHub.on('xxx',()=>{

})

eventHub.emit('xxx')



