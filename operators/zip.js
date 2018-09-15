import { curry } from '../utils.js';

/**
 * 
 * @param {*} stream1 
 * @param {*} stream2 
 */
function zip(stream1, stream2) {
    var canReturn = false;
    var v1 = [];
    var v2 = [];

    function send(next) {
        if (v1.length && v2.length) {
            next([v1.shift(), v2.shift()]);
        }
    };
    return {
        subscribe: function (next, complete, error) {
            stream1.subscribe(
                (item) => {
                    v1.push(item);
                    send(next);
                },
                () => {
                    if (canReturn && !v1.length && !v2.length) 
                        complete && complete();
                    else canReturn = true;
                },
                () => {
                    error && error();
                }
            );
            stream2.subscribe(
                (item) => {
                    v2.push(item);
                    send(next);
                },
                () => {
                    if (canReturn && !v1.length && !v2.length) complete && complete();
                    else canReturn = true;
                },
                () => {
                    error && error();
                }
            );
        }
    }
}

export default curry(zip);