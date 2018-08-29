import { curry } from '../utils.js';

function FromRange(start, end) {
    return {
        subscribe : function(next, complete) {
            for(var i = start; i <= end; i++) {
                next(i);
            }
            complete && complete();
        }
    }
}

export default curry(FromRange);