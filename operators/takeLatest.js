import { curry } from '../utils.js'

function takeLatest(stream1, stream2) {
    var val1 = undefined;
    var val2 = undefined;
    var isComplete = false;

    return {
        subscribe : function(next, complete, error) {
            stream1.subscribe(item => {
                val1 = item;
                next([val1, val2]);
            }, () => {
                if(isComplete) complete && complete();
                else isComplete = true;
            }, () => {
                error && error();
            });

            stream2.subscribe(item => {
                val2 = item;
                next([val1, val2]);
            }, () => {
                if(isComplete) complete && complete();
                else isComplete = true;
            }, () => {
                error && error();
            })
        }
    }
}

export default curry(takeLatest);