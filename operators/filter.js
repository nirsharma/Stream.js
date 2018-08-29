import { curry } from '../utils.js';

/**
 * 
 * @param {*} func A filter function
 * @param {*} stream 
 */
function filter(filterFn, stream) {
    return {
        subscribe : function(next, complete, error) {
            stream.subscribe(item => {
                if(filterFn(item)) next(item);
            }, () => {
                complete && complete();
            }, () => {
                error();
            })
        }
    }
}

export default curry(filter);