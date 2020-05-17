import EventHub  from "../src/index";

const eventHub = new EventHub()

//第一个断言
console.assert(eventHub instanceof Object  === true,
    'eventHub 是一个对象')

eventHub.on('xxx',(data)=>{
    console.log('我被调用了');
    console.log(data);
})

eventHub.emit('xxx','我是emit的第二个参数')



const eventHub2 = new EventHub()

let fn2 = ()=>{
    console.log('我是fn2， 我应该是不执行的');
}
eventHub2.on('yyy',fn2)

eventHub2.off('yyy',fn2)

eventHub2.emit('yyy')

/*
* 你这个只接受一个参数，我要传两个参数怎么办？直接传一个数组就好了
*
* 你故意留一个你能解决的坑给他问
*
* 为什么safeCache 不行？
* */

