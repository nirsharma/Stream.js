import operators from "../operators/index.js";

import fromArray from "./FromArray.js";
import fromDomEvent from "./FromDOMEvent.js";
import fromInterval from "./FromInterval.js";
import fromPromise from "./FromPromise.js";
import fromRange from "./FromRange.js";
import Create from "./Create.js";

function sourceWrapper(source) {
    this.calls = [];
    this.index = 0;
    this.calls.push(source);
    this.subscribe = this.calls[0].subscribe;
}

sourceWrapper.prototype = operators;

export default {
    FromArray : (arr) => (new sourceWrapper(fromArray(arr))),
    FromDomEvent : (el, evt) => (new sourceWrapper(fromDomEvent(el, evt))),
    FromInterval : (time) => (new sourceWrapper(fromInterval(time))),
    FromPromise : (pro) => (new sourceWrapper(fromPromise(pro))),
    FromRange : (start, end) => (new sourceWrapper(fromRange(start, end))),
    Create : (func) => (new sourceWrapper(Create(func)))
};

