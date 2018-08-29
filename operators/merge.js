import { curry } from '../utils.js';

/**
 * 
 * @param {*} stream1 
 * @param {*} stream2 
 */
function merge(stream1, stream2) {
    var flag = false;
    return {
        subscribe : function(next, complete) {
            stream1.subscribe(item => {
                next(item);
            }, () => {
                if(flag) complete();
                else flag = true;
            })
            stream2.subscribe(item => {
            next(item);
            }, () => {
                if(flag) complete();
                else flag = true;
            })
        }
    }
}

export default curry(merge);