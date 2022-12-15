//------------------Anagram------------------
let isAnagram = function (s, t) {

    // T.C = O(n)
    // S.C = O(n)
    let map = {};
    if (s.length != t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] = (map[t[i]] || 0) - 1;
    }
    for (e in map) {
        if (map[e] != 0) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("delhi", "dlihe"));