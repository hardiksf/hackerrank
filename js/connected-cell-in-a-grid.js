function connectedCell(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    //Adding 0s to right, left, top and bottom so that boundary condition does not need to be checked and neighbors can be checked conveniently
    for (let i = 0; i < rows; i++) {
        matrix[i].push(0);
        matrix[i].unshift(0);
    }

    const bottomAndTopRows = [];
    for (let i = 0; i <= columns + 1; i++) {
        bottomAndTopRows.push(0);
    }

    matrix = [...[bottomAndTopRows], ...matrix, ...[bottomAndTopRows]];

    const set = new Set();

    const neighbors = (row, column) => {
        return [
            [row - 1, column - 1], [row - 1, column], [row - 1, column + 1],
            [row, column - 1], [row, column + 1],
            [row + 1, column - 1], [row + 1, column], [row + 1, column + 1]
        ];
    }

    const myFn = (count, r, c) => {
        if (matrix[r][c] === 0) {
            return;
        }

        if (matrix[r][c] === 1) {
            count++;
            matrix[r][c] = 0;

            const allNeighbors = neighbors(r, c);
            for (let k = 0; k < allNeighbors.length; k++) {
                myFn(count, allNeighbors[k][0], allNeighbors[k][1]);
            }
        }
        set.add(count);

    };


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let count = 0;
            myFn(count, i, j);
        }
    }

    const max = Math.max(...Array.from(set.values()));
    console.log(max);


}

const matrix = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1],
    [0, 1, 0, 1, 1]];

connectedCell(matrix);