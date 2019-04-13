function almostSorted(arr) {
    const length = arr.length;
    const nonSortedElements = [];
    const indexOfNonSortedElements = [];
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            nonSortedElements.push(arr[i]);
            indexOfNonSortedElements.push(i);
        }
    }
    const nonSortedElementsLength = nonSortedElements.length;
    if (nonSortedElementsLength === 1
        && nonSortedElements[0] > arr[indexOfNonSortedElements[0] + 1]
        && ((arr[indexOfNonSortedElements[0] + 2] !== undefined) ?
            nonSortedElements[0] < arr[indexOfNonSortedElements[0] + 2]
            : true)
    ) {
        console.log(`yes`);
        console.log(`swap ${indexOfNonSortedElements[0] + 1} ${indexOfNonSortedElements[0] + 2}`);
    }
    else if (nonSortedElementsLength > 1) {
        nonSortedElements.reverse();
        let modifiedArray = [];
        for (let i = 0; i < indexOfNonSortedElements[0]; i++) {
            modifiedArray.push(arr[i]);
        }
        modifiedArray.push(arr[indexOfNonSortedElements[nonSortedElementsLength - 1] + 1]);
        modifiedArray = [...modifiedArray, ...nonSortedElements];

        for (let i = indexOfNonSortedElements[nonSortedElementsLength - 1] + indexOfNonSortedElements[0] + 1; i < length; i++) {
            modifiedArray.push(arr[i]);
        }

        for (let i = 0; i < length - 1; i++) {
            if (modifiedArray[i] > modifiedArray[i + 1]) {
                console.log(`no`);
                return;
            }
            if (i === length - 2) {
                console.log(`yes`);
                console.log(`reverse ${indexOfNonSortedElements[0] + 1} ${indexOfNonSortedElements[nonSortedElementsLength - 1] + 2}`);
            }
        }
    }
    else {
        console.log(`no`);
    }
    console.log(`nonSortedElements`, nonSortedElements);
    console.log(`indexOfNonSortedElements`, indexOfNonSortedElements);
}
// This test case is failing, answer should be no
const arr = [43, 65, 1, 98, 99, 101];
almostSorted(arr);