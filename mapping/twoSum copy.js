
//------------------------ two sum -------------------------
function twoSum(a, t) {
    let map = new Map()
    for (let i = 0; i < a.length; i++) {
        let diff = t - a[i]
        if (map.has(diff)) {
            return [diff, a[i], true]

        }
        else {
            map.set(a[i], 1)
        }
    }
    return false
}
let arr = [2, 3, 1, 6, 5, 8, 9]
let target = 3
console.log(twoSum(arr, target));
