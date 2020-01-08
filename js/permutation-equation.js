function permutationEquation(p) {
    const min = Math.min(...p);
    const result = [];
    for (let i = min; i <= p.length; i++) {
        result.push(p.indexOf(p.indexOf(i) + 1) + 1);
    }
    return result;
}
const myArray = [2, 3, 1];
permutationEquation(myArray);