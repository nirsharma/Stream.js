import { curry } from '../utils.js';

/**
 * 
 * @param {*} arr 
 * @param {*} stream 
 */
function startsWith(arr, stream) {
    return {
        subscribe : function(next, complete, error) {
            arr.forEach(item => next(item));
            stream.subscribe(item => next(item), 
                () => complete(),
                () => error()
            );
        }
    }
}

export default curry(startsWith);