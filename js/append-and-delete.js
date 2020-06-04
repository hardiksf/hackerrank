// couldn't figure out the logic on Aug 18, try later

function appendAndDelete(s, t, k) {
    let answer = 'Yes';
    for (let index = 0; index < s.length; index++) {
        if (s.localeCompare(t) === 0 && k === 1) {
            answer = 'No';
        } else if (s.charAt(index) !== t.charAt(index)) {
            const totalCharactersNotMatchingInS = s.length - index;
            const totalCharactersNotMatchingInT = t.length - index;
            totalCharactersNotMatchingInS + totalCharactersNotMatchingInT <= k ? answer = 'Yes' : answer = 'No';
            break;
        }
    }
    return answer;
}

// yes
s = 'hackerhappy';
t = 'hackerrank';
k = 9;
console.log(appendAndDelete(s, t, k));

// yes
s = 'abc';
t = 'abc';
k = 9;
console.log(appendAndDelete(s, t, k));

// no
s = 'peek';
t = 'seeker';
k = 3;
console.log(appendAndDelete(s, t, k));

// no
s = '123456789', t = '1', k = 5;
console.log(appendAndDelete(s, t, k));

// no
s = 'abc', t = 'abc', k = 1;

console.log(appendAndDelete(s, t, k));

// comparing string
string_a.localeCompare(string_b);
/*
 * Expected Returns:
 * 0:  exact match
 * -1:  string_a < string_b
 * 1:  string_a > string_b
 */
