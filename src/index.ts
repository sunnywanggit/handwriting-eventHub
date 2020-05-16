class EventHub  {

    cache = {}
    /*
    * '楚天都市报' [fn1,fn2,fn3]
    * '羊城晚报' [fn1,fn2,fn3]
    * cache 里面存放的就是事件名和事件对象
    *  */

    on(eventName,fn){
        //把 fn 推进 this.cache[eventName] 数组
        //如果没有事件存在，我们初始化一下
        if(this.cache[eventName] === undefined){
            this.cache[eventName] = []
        }

        const array = this.cache[eventName]
        array.push(fn)
    }

    emit(eventName){
        // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
        let array = this.cache[eventName]
        if(array === undefined){
            array = []
        }

        array.forEach(fn=>{
            fn()
        })

    }
}

export default EventHub

