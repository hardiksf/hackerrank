function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0;
    if (y1 < y2) {
        fine = 0;
    } else if (y1 > y2) {
        fine = 10000;
    } else if (m1 < m2) {
        fine = 0;
    } else if (m1 > m2) {
        fine = (m1 - m2) * 500;
    } else if (d1 > d2) {
        fine = (d1 - d2) * 15;
    }
    return fine;

}

console.log(libraryFine(2, 3, 84, 3, 3, 85));
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
console.log(libraryFine(28, 2, 2015, 15, 4, 2015));
