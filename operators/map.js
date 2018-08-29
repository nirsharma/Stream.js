import { curry } from '../utils.js';
/**
 * 
 * @param {*} mapper A mapper function
 * @param {*} stream the Stream
 */
function map(mapper, stream) {
    return {
        subscribe : function(next, complete, error) {
            stream.subscribe(item => {
                next(mapper(item))
            }, () => {
                complete && complete();
            }, () => {
                error();
            })
        }
    }
}

export default curry(map);