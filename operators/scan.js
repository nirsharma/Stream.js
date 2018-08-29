import { curry } from '../utils.js'

/**
 * 
 * @param {*} func 
 * @param {*} stream 
 */
function scan(func, base, stream) {
    return {
        subscribe : function(next, complete, error) {
            stream.subscribe(item => {
                base = func(base, item);
                next(base);
            }, () => {
                complete && complete();
            }, () => {
                error && error();
            })
        }
    }
}

export default curry(scan);