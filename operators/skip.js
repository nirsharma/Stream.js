import { curry } from '../utils.js';
/**
 * 
 * @param {*} num A Number
 * @param {*} stream the Stream
 */
function skip(num, stream) {
    return {
        subscribe : function(next, complete, error) {
            stream.subscribe(item => {
                if(!num) next(item)
                else num--;
            }, () => {
                complete && complete();
            }, () => {
                error && error();
            })
        }
    }
}

export default curry(skip);