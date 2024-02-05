function curry(func) {
    return function curried() {
        const args = Array.from(arguments);

        if (args.length >= func.length) {
            return func.apply(null, args);
        } else {
            return function () {
                const moreArgs = Array.from(arguments);
                return curried.apply(null, args.concat(moreArgs));
            };
        }
    };
}

function add(x, y) {
    return x + y;
}

const curriedAdd = curry(add);

const result1 = curriedAdd(3)(4);
const result2 = curriedAdd(5, 6);

console.log("Result 1:", result1); 
console.log("Result 2:", result2); 
