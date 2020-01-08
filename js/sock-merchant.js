function sockMerchant(n, ar) {
    const set = new Set;
    let count = 0;
    ar.forEach(element => {
        if (!set.has(element)) {
            set.add(element);
        } else {
            count = count + 1;
            set.delete(element);
        }
    });
    return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));