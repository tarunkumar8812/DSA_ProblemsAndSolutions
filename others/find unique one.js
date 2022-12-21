let arr = [2, 7, 2, 4, 1, 5, 3, 4, 7, 3, 1]

function lonlyInteger(a) {
    let map = {}
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = (map[a[i]] || 0) + 1
    }
    console.log(map);
    for (let e in map) {
        if (map[e] == 1) return e
    }
    return false
}
console.log(lonlyInteger(arr))