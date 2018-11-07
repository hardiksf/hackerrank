//Balanced brackets
function isBalanced(s) {
    let length = -1;
    while (s.length !== length) {
        length = s.length;
        s = s.replace('{}', '');
        s = s.replace('[]', '');
        s = s.replace('()', '');
    }
    if (s.length === 0) {
        return "YES";
    } else {
        return "NO";
    }
}


s = "{[(])}";
console.log(isBalanced(s));