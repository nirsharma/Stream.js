import { curry } from '../utils.js';


/**
 * 
 * @param {*} element A DOM Element
 * @param {*} event A string stating the event. Eg "click", "mouseover" etc.
 */
function fromEvent(element, event) {
    return {
      subscribe : function(next, complete) {
        element.addEventListener(event, evt => next(evt))
      }
    }
}

export default curry(fromEvent);