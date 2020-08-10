class EventHub {

    private cache: { [key: string]: Array<(data: unknown) => void> } = {};

    /*
    * eventName '楚天都市报'  fn [fn1,fn2,fn3]
    * eventName '羊城晚报' fn [fn1,fn2,fn3]
    * cache = {'楚天都市报':[fn1,fn2,fn3]}
    * cache 里面存放的就是事件名和该事件名所对应的事件回调
    */

    /*
    eventName 你需要订阅的事件名
    fn 事件发生的时候，你要做的事情
     */
    on(eventName: string, fn: (data: unknown) => void) {
        /*
        把 fn 推进 this.cache[eventName] 数组
        如果没有事件存在，我们初始化一下
         */
        (this.cache[eventName] || []).push(fn);
    }

    //发布
    emit(eventName: string, data?: unknown) {
        // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
        if (this.cache[eventName] === undefined) return;
        this.cache[eventName].forEach(fn => fn(data));
    }

    //取消订阅
    off(eventName: string, fn: (data: unknown) => void) {
        // 把 fn 从 this.cache[eventName] 数组里面中删除
        let index = indexOf(this.cache[eventName], fn);
        if (index === -1) return;
        this.cache[eventName].splice(index, 1);
    }
}

export default EventHub;

function indexOf(array, item) {
    if (array === undefined) {
        return -1;
    }
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i;
            break;
        }
    }
    return index;
}

