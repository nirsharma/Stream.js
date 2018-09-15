import { curry } from '../utils.js';

/**
 * 
 * @param {*} stream1 
 * @param {*} stream2 
 */
function merge(stream1, stream2) {
    var flag = false;
    return {
        subscribe : function(next, complete, error) {
            stream1.subscribe(item => {
                next(item);
            }, () => {
                if(flag) complete && complete();
                else flag = true;
            }, () => error && error())

            stream2.subscribe(item => {
                next(item);
            }, () => {
                if(flag) complete && complete();
                else flag = true;
            }, () => error && error())
        }
    }
}

export default curry(merge);