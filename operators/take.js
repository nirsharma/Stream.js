import { curry } from '../utils.js';
/**
 * 
 * @param {*} num A Number
 * @param {*} stream the Stream
 */
function take(num, stream) {
    var completed = false;
    return {
        subscribe : function(next, complete, error) {
            stream.subscribe(item => {
                if(num-- > 0) next(item)
                if(!num) {
                    complete && complete();
                    completed = true;
                }
            }, () => {
                if(!completed)
                    complete && complete();
            }, () => {
                error && error();
            })
        }
    }
}

export default curry(take);