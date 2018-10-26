// study how this solution works

function extraLongFactorials(n) {
    var nstring = n.toString();
    var result = "";
    n = n - 1;


    var calc = 0;
    var rest = 0;
    while (n > 0) {
        for (let i = nstring.length - 1; i >= 0; i--) {
            calc = n * parseInt(nstring[i]) + rest;
            calc = calc.toString();
            i != 0 ? result = calc[calc.length - 1] + result : result = calc + result;
            calc > 9 ? rest = calc.slice(0, calc.length - 1) : rest = "0";
            rest = parseInt(rest);
        }
        nstring = result;
        result = "";
        rest = 0;
        n--;
    }
    return nstring;
}

console.log(extraLongFactorials(25));