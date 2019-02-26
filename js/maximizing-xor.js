function maximizingXor(l, r) {
    let max = 0;
    for (let i = l; i < r + 1; i++) {
        for (let j = i; j < r + 1; j++) {
            const bitXor = i ^ j;
            console.log(i, j, bitXor);
            if (bitXor > max) {
                max = bitXor;
            }

        }
    }
    return max;
}

const l = 10;
const r = 15;
maximizingXor(l, r);