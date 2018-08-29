
function FromPromise(promise) {
    return {
        subscribe : function(next, complete, error) {
            promise.then(next, error).then(() => complete && complete('complete'));
        }
    }
}

export default FromPromise;