const repeatString = function(str ,num) {
    let repeat = "";
    if (num < 0){
        return "ERROR";   
    }else{
        for (let i = 0; i < num; i++) {
            repeat += str;
        }
        return repeat;
    }    
};

// Do not edit below this line
module.exports = repeatString;
