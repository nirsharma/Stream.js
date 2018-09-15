import filter from './filter.js';
import map from './map.js';
import merge from './merge.js';
import scan from './scan.js';
import startsWith from './startsWith.js';
import takeLatest from './takeLatest.js';
import zip from './zip.js';


function operatorWrapper(operator) {
    var that = this;
    this.calls.push(operator(that.calls[that.index]));
    this.index++;
    this.subscribe = this.calls[this.index].subscribe;
    return this;
}

export default {
    map: function (mapper) {
        return operatorWrapper.call(this, map(mapper))
    },
    filter: function (func) {
        return operatorWrapper.call(this, filter(func))
    },
    merge: function (stream) {
        return operatorWrapper.call(this, merge(stream))
    },
    scan: function (func, base) {
        return operatorWrapper.call(this, scan(func, base))
    },
    startsWith: function (arr) {
        return operatorWrapper.call(this, startsWith(arr))
    },
    takeLatest: function (stream) {
        return operatorWrapper.call(this, takeLatest(stream))
    },
    zip: function (stream) {
        return operatorWrapper.call(this, zip(stream))
    }
};