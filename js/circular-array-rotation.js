function circularArrayRotation(a, k, queries) {
    if (k % a.length !== 0) {
        if (a.length < k) {
            k = k % a.length;
        }
    }
    for (let index = 0; index < queries.length; index++) {
        if (index + k > a.length - 1) {

            console.log(a[index + k - a.length]);
        } else {
            console.log(a[index + k]);
        }

    }

}

let a = [3, 4, 5];
// 4, 5, 3
// 5, 3, 4
let k = 2;
let queries = [1, 2];

circularArrayRotation(a, k, queries);