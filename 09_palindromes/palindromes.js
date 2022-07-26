const palindromes = function (str) {
    const remove = /\W/g;
    const lowStr = str.replace(remove, '').toLowerCase();
    const revStr = lowStr.split('').reverse().join('');
    if(revStr === lowStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
