const findTheOldest = function(people) {
    let yearslived1 = 0;
    const theOldest = people.reduce((oldest, person) => {
        if(person.yearOfDeath == null) {
            person['yearOfDeath'] = new Date().getFullYear();
        }
        const yearsLived2 = person['yearOfDeath'] - person.yearOfBirth;
        if (yearsLived2 > yearslived1) {
            yearslived1 = yearsLived2;
            oldest = person;
        }
        return oldest;
    }, {});
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
