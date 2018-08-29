
export function curry (fn) {
    return function func(...args) {
        if(args.length < fn.length) {
            return function(...params) {
                return func(...args, ...params);
            }
        } else {
            return fn(...args);
        }
    }
}

export function compose (...args) {
    return function(...params) {
        var input  = (args[args.length - 1])(...params);
        for(var i = args.length-2; i >=0; i--) {
          input = (args[i])(input);
        }
        return input;  
    }
}