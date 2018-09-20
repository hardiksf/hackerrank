function insertionSort2(n, arr) {

    for (let index = 1; index < n; index++) {
        for (let j = index - 1; j >= 0; j--) {




            if (arr[index] < arr[j]) {

                let temp = arr[j];
                arr[j] = arr[index];
                arr[index] = temp;
            }
        }


        console.log(arr);
    }


}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);