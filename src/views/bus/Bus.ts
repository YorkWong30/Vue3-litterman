// 使用ts实现Bus。用于兄弟组件传参
type BusClass<T> = {
    emit: (name: T) => void
    on: (name: T, callback: Function) => void
}
type BusParams = string | number | symbol

type List = {
    [key: BusParams]: Array<Function>
}

class Bus<T extends BusParams> implements BusClass<T> {
    list: List
    constructor() {
        this.list = {}
    }
    emit(name: BusParams, ...args: Array<any>) {
        // eslint-disable-next-line prefer-const
        let fnArr: Array<Function> = this.list[name]
        fnArr.forEach(ev => {
            ev.apply(this, args);
        })
    }

    on(name: BusParams, callback: Function) {
        const fn: Array<Function> = this.list[name] || [];
        fn.push(callback);
        this.list[name] = fn;
    }
}

export default new Bus<number>()