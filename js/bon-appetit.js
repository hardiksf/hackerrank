function bonAppetit(bill, k, b) {
    const annaOwes = (bill.reduce((a, b) => (a + b)) - bill[k]) / 2;
    if (annaOwes === b) {
        console.log(`Bon Appetit`);
    } else {
        console.log(b - annaOwes);
    }

}
bonAppetit([3, 10, 2, 9], 1, 12);