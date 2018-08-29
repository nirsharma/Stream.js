
/**
 * 
 * @param {*} time 
 */
function FromInterval(time) {
    var val = 0;
    return {
        subscribe : function(next) {
            setInterval(() => next(val++) , time);
        }
    }
}

export default FromInterval