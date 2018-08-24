function staircase(n) {
    for (let i = 0; i < n; i = i + 1) {
        console.log(Array(n - i).join(" ").concat(Array(i + 2).join("#")));
    }

}

staircase(4);