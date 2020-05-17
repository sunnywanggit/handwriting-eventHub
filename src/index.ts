class EventHub {

    private  cache : {[key:string]:Array<(data:unknown)=>void>} = {}


    /*
    * '楚天都市报' [fn1,fn2,fn3]
    * '羊城晚报' [fn1,fn2,fn3]
    * cache = {'楚天都市报':[fn1,fn2,fn3]}
    * cache 里面存放的就是事件名和事件对象
    *  */

    //订阅
    on(eventName:string, fn:(data:unknown)=>void) {
        //把 fn 推进 this.cache[eventName] 数组
        //如果没有事件存在，我们初始化一下
        (this.cache[eventName] || []).push(fn)
    }

    // ? 在这里的意思是说 data 可以为空
    //发布
    emit(eventName:string, data?:unknown) {
        // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
        (this.cache[eventName] || []).forEach(fn => fn(data))
    }

    //取消订阅
    off(eventName:string, fn:(data:unknown)=>void) {
        this.cache[eventName] = this.cache[eventName] || []
        //用 index 来记住你要取消订阅的事件
        let index = undefined
        for (let i = 0; i < this.cache[eventName].length; i++) {
            if (this.cache[eventName][i] === fn) {
                index = i
                break
            }
        }

        if (index === undefined) return;
        this.cache[eventName].splice(index, 1)
    }
}

export default EventHub

