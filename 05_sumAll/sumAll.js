const sumAll = function(num1, num2) {
    let total = 0;
    if ((typeof num1 === 'number' && typeof num2 === 'number') && (num1 > 0 && num2 >0)) {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                total += i;
            }
            return total;
        } else {
            for (let i = num2; i <= num1; i++) {
                total += i;
            }
            return total;
        }
    }else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
