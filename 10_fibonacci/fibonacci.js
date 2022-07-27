const fibonacci = function(num) {
    if(Number(num) === NaN || num < 0) {
        return 'OOPS';
    }
    if(typeof num === 'string') {
        num = parseInt(num);
    }
    if(num === 1) {
        return 1;
    }
    let fib = [0, 1];
    for(let i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        if(num === i) {
            return fib[i];
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
