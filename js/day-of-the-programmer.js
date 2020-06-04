function solve(year) {
    let numberOfDaysInFebruary = 28;
    if (year <= 1917 && year % 4 === 0) {
        numberOfDaysInFebruary = 29;
    }
    if (year === 1918) {
        numberOfDaysInFebruary = 15;
    }
    if ((year > 1917) && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
        numberOfDaysInFebruary = 29;
    }
    const numberOfDaysTillAugust = 31 + numberOfDaysInFebruary + 31 + 30 + 31 + 30 + 31 + 31;
    const dayOfProgrammerDate = 256 - numberOfDaysTillAugust;
    return `${dayOfProgrammerDate}.09.${year}`;

}

console.log(solve(2016));
