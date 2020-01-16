function appendAndDelete(s, t, k) {
    const sLength = s.length;
    const tLength = t.length;
    const longerLength = Math.max(sLength, tLength);
    let firstMatchingCharactersLength = 0;
    for (let i = 0; i < longerLength; i++) {
        if (s.charAt(i) === t.charAt(i)) {
            firstMatchingCharactersLength++;
        } else {
            break;
        }
    }

    const remainingCharactersLengthOfS = sLength - firstMatchingCharactersLength;
    const remainingCharactersLengthOfT = tLength - firstMatchingCharactersLength;

    if (remainingCharactersLengthOfS + remainingCharactersLengthOfT > k) {
        return 'No';
    } else if ((remainingCharactersLengthOfS + remainingCharactersLengthOfT) % 2 === k % 2) {
        return 'Yes';
    } else if (sLength + tLength - k < 0) {
        return 'Yes';
    } else {
        return 'No';
    }

}

console.log(appendAndDelete('ashley', 'ash', 2), `no`);
// yes
s = 'hackerhappy';
t = 'hackerrank';
k = 9;
console.log(appendAndDelete(s, t, k), `yes`);

console.log(appendAndDelete(`aba`, `aba`, 7), `yes`);

// yes
s = 'abc';
t = 'abc';
k = 9;
console.log(appendAndDelete(s, t, k), `yes`);

// no
s = 'peek';
t = 'seeker';
k = 3;
console.log(appendAndDelete(s, t, k), `no`);

// no
s = '123456789', t = '1', k = 5;
console.log(appendAndDelete(s, t, k), `no`);

// no
s = 'abc', t = 'abc', k = 1;
console.log(appendAndDelete(s, t, k), `no`);

// no
s = 'abc', t = 'abc', k = 3;
console.log(appendAndDelete(s, t, k), `no`);