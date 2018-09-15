
function Create(func) {
    return {
      subscribe : function(next, complete, error) {
        func({
            next,
            complete,
            error
        });
      }
    }
}

export default Create;