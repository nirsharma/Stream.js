import { curry } from '../utils.js';


function fromArray(arr) {
    return {
      subscribe : function(next, complete) {
        arr.forEach(item => next(item));
        complete && complete();
      }
    }
}

export default curry(fromArray);