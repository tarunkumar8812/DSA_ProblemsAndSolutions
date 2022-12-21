// ----------------------Sum zero ----------------------

let arr = [-6, -5, -4, 0, 1, 2, 3, 4]
// let arr = [-6, -5, -4, -3, -2, 0, 1, 2, 3, 4, 7, 8]

function sumZero(a) {
    let i = 0, j = a.length - 1
    while (i < j) {
        if (a[i] + a[j] == 0) { return true }

        else if (a[i] + a[j] > 0) { j-- }

        else { i++ }
    }
    return false

}
console.log(sumZero(arr));
