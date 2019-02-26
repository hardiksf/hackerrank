function jimOrders(orders) {
    const length = orders.length;
    const ordersWithServingTime = [];
    for (let i = 0; i < length; i++) {
        ordersWithServingTime[i] = [];
        ordersWithServingTime[i][0] = (i + 1);
        ordersWithServingTime[i][1] = (orders[i][0] + orders[i][1]);
    }

    ordersWithServingTime.sort(
        (a, b) => { return a[1] - b[1] }
    );

    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(ordersWithServingTime[i][0])
    }

    return result;
}
const orders = [
    [8, 1],
    [4, 2],
    [5, 6],
    [3, 1],
    [4, 3]
];

jimOrders(orders);