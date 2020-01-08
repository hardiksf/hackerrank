function bigSorting(unsorted) {
    function compareNumbers(a, b) {
        if (a.length !== b.length && a.length < b.length) {
            return -1;
        }

        if (a.length !== b.length && a.length > b.length) {
            return 1;
        }

        if (a.length === b.length) {
            for (let index = 0; index < a.length; index++) {
                if (a[index] < b[index]) {
                    return -1;
                }
                if (a[index] > b[index]) {
                    return 1;
                }

            }
            return 0;

        }
        return 0;
    }
    return unsorted.sort(compareNumbers);

}

const unsorted = ['31415926535897932384626433837', '31415926535897932384626433836'];

console.log(bigSorting(unsorted));