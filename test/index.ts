import EventHub from '../src/index';

test1('eventHub 是一个对象');
test2('eventHub 有 on 和 emit 属性');
test3('eventHub 可以取消事件订阅');

function test1(message) {
    const eventHub = new EventHub();
    console.log(message);
    console.assert(eventHub instanceof Object,);
}

function test2(message) {
    const eventHub = new EventHub();
    console.log(message);
    //必须要先订阅再发布，如果你先发布再订阅就有可能没病订阅上
    let called = false;
    eventHub.on('xxx', (data) => {
        called = true;
        console.assert(data === '我是emit的第二个参数');
    });
    eventHub.emit('xxx', '我是emit的第二个参数');

    setTimeout(()=>{
        console.log('我执行了');
        console.assert(called === true)
    },1000)
}




function test3(message) {
    console.log(message);
    const eventHub = new EventHub();


    let called = false;
    let fn2 = () => {
        called = true;
        console.log('我是fn2， 我应该是不执行的,因为我的订阅在中途被取消了');
    };
    eventHub.on('yyy', fn2);
    eventHub.off('yyy', fn2);
    eventHub.emit('yyy');

    setTimeout(()=>{
        console.log('我没有执行');
        console.assert(called === false)
    },1000)
}


/*
* 你这个只接受一个参数，我要传两个参数怎么办？直接传一个数组就好了
*
* 你故意留一个你能解决的坑给他问
*
* 为什么safeCache 不行？
* */

