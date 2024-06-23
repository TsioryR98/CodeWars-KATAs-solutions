let str = "1".repeat(0)

function pyramid(n) {
    let pyramid = [];
    if (n > 0) {
        for (let index = 1; index <= n; index++) {
            pyramid.push("1".repeat(index).split("").map((x) => Number(x)));
        }
    }
    return pyramid;
}

console.log(pyramid(0))