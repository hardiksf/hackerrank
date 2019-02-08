function balancedSums(arr) {
    const length = arr.length;
    let result = "NO";
    if (length === 1) {
        result = "YES";
    }

    if (length > 2) {
        let leftSum = 0;
        let rightSum = 0;
        let remainingElementsToCheck = length;
        let indexOfNextElementToBeBeAddedToLeftSum = 0;
        let indexOfNextElementToBeBeAddedToRightSum = length - 1;

        while (remainingElementsToCheck > 1) {
            if (leftSum < rightSum) {
                leftSum = leftSum + arr[indexOfNextElementToBeBeAddedToLeftSum];
                indexOfNextElementToBeBeAddedToLeftSum++;
            } else if (leftSum > rightSum) {
                rightSum = rightSum + arr[indexOfNextElementToBeBeAddedToRightSum];
                indexOfNextElementToBeBeAddedToRightSum--;
            } else {
                //sum is same, add the lowest from  left and right
                if (rightSum === leftSum) {
                    if (arr[indexOfNextElementToBeBeAddedToLeftSum] < arr[indexOfNextElementToBeBeAddedToRightSum]) {
                        leftSum = leftSum + arr[indexOfNextElementToBeBeAddedToLeftSum];
                        indexOfNextElementToBeBeAddedToLeftSum++;
                    } else {
                        rightSum = rightSum + arr[indexOfNextElementToBeBeAddedToRightSum];
                        indexOfNextElementToBeBeAddedToRightSum--;
                    }

                }
            }
            remainingElementsToCheck--;
        }
        if (rightSum === leftSum) {
            result = "YES";
        }
    }
    return result;
}

arrayOne = [0, 0, 2, 0];
arrayTwo = [1, 2, 3];

console.log(balancedSums(arrayOne));