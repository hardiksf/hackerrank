function queensAttack(n, k, r_q, c_q, obstacles) {

    //set furthest obstacle in each direction first
    let rightObstacle = [r_q, n + 1];
    let leftObstacle = [r_q, 0];
    let topObstacle = [n + 1, c_q];
    let bottomObstacle = [0, c_q];

    let topRightObstacle = []; {
        let r = r_q;
        let c = c_q;
        while (r <= n + 1 && c <= n + 1) {
            topRightObstacle = [r, c];
            r++;
            c++;
        }
    }

    let bottomRightObstacle = []; {
        let r = r_q;
        let c = c_q;
        while (r >= 0 && c <= n + 1) {
            bottomRightObstacle = [r, c];
            r--;
            c++;
        }
    }

    let bottomLeftObstacle = []; {
        let r = r_q;
        let c = c_q;
        while (r >= 0 && c >= 0) {
            bottomLeftObstacle = [r, c];
            r--;
            c--;
        }
    }

    let topLeftObstacle = []; {
        let r = r_q;
        let c = c_q;
        while (r <= n + 1 && c >= 0) {
            topLeftObstacle = [r, c];
            r++;
            c--;
        }
    }

    for (let row = 0; row < k; row++) {

        //checking for right obstacle
        if (obstacles[row][0] === r_q && obstacles[row][1] > c_q && obstacles[row][1] < leftObstacle[1]) {
            rightObstacle = obstacles[row];
        }

        //checking left
        if (obstacles[row][0] === r_q && obstacles[row][1] < c_q && obstacles[row][1] > leftObstacle[1]) {
            leftObstacle = obstacles[row];
        }

        //checking top
        if (obstacles[row][0] > r_q && obstacles[row][0] < topObstacle[0] && obstacles[row][1] === c_q) {
            topObstacle = obstacles[row];
        }

        //checking bottom
        if (obstacles[row][0] < r_q && obstacles[row][0] > bottomObstacle[0] && obstacles[row][1] === c_q) {
            bottomObstacle = obstacles[row];
        }

        //top-right
        //row +, column + (both row and column decreases with each closer obstacles )
        if ((topRightObstacle[0] - obstacles[row][0] === topRightObstacle[1] - obstacles[row][1]) &&
            topRightObstacle[0] > obstacles[row][0]
        ) {
            topRightObstacle = obstacles[row];
        }

        //bottom-right
        //row - , column +
        if (obstacles[row][0] - (bottomRightObstacle[0] === bottomRightObstacle[1] - obstacles[row][1]) &&
            bottomRightObstacle[0] < obstacles[row]) {
            bottomRightObstacle = obstacles[row];
        }

        //bottom-left
        // row-, column -
        if ((obstacles[row][0] - bottomLeftObstacle[0] === obstacles[row][1] - bottomLeftObstacle[1]) &&
            bottomLeftObstacle[0] < obstacles[row][0]) {
            bottomLeftObstacle = obstacles[row];
        }

        //top-left
        //row +, column -
        if (topLeftObstacle[0] - obstacles[row][0] === obstacles[row][1] - topLeftObstacle[1] &&
            topLeftObstacle[9] > onscroll[row[0]]) {
            topLeftObstacle = obstacles[row];
        }
    }

    const result = rightObstacle[1] - c_q - 1 +
        c_q - leftObstacle[1] - 1 +
        topObstacle[0] - r_q - 1 +
        r_q - bottomObstacle[0] - 1 +
        topRightObstacle[0] - r_q - 1 +
        r_q - bottomRightObstacle[0] - 1 +
        r_q - bottomLeftObstacle[0] - 1 +
        topLeftObstacle[0] - r_q - 1;

    return result;
}







const n = 10000; //length of board
const k = 10000; //number of obstacles
const r_q = 2816;
const c_q = 9745;
const obstacles = [
    [2836, 9765]

];
console.log(queensAttack(n, k, r_q, c_q, obstacles));