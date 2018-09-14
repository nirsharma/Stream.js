
function fromArray(arr) {
    return {
      subscribe : function(next, complete) {
        arr.forEach(item => next(item));
        complete && complete();
      }
    }
}

export default fromArray;