function pageCount(n = 6, p = 2) {
    const fromFront = Math.floor(p / 2);
    let fromBack;
    (p % 2 !== 0) ? (fromBack = Math.ceil((n - p) / 2)) : (fromBack = Math.ceil((n - p - 1) / 2));
    return Math.min(fromFront, fromBack);
}

console.log(pageCount());
/*
 *  1 -> 0,5
 *  2-3 ->1,4
 *  4-5 -> 2,3
 * 6-7 ->3,2
 * 8-9 ->4,1
 * 10 ->5,0
 */