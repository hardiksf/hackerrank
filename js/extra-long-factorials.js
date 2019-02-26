// study how this solution works

function extraLongFactorials(n) {
    var nString = n.toString();
    var result = "";
    n = n - 1;

    var calc = 0;
    var rest = 0;
    while (n > 0) {
        for (let i = nString.length - 1; i >= 0; i--) {
            calc = n * parseInt(nString[i]) + rest;
            console.log(`calc`, calc);
            calc = calc.toString();
            i != 0 ? result = calc[calc.length - 1] + result : result = calc + result;
            calc > 9 ? rest = calc.slice(0, calc.length - 1) : rest = "0";
            rest = parseInt(rest);
        }
        nString = result;
        result = "";
        rest = 0;
        n--;
    }
    return nString;
}

console.log(extraLongFactorials(25));