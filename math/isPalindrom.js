function isPalindrome(x) {
    // T.C = O(n)
    // S.C = O(1)
    let st = x.toString()
    let l = st.length
    for (let i = 0; i < l / 2; i++) {
        if (st[i] != st[l - 1 - i]) {
            return false
        }
    }
    return true
};

let x = -121 //output=true
// let x = -121 //output=false
console.log(isPalindrome(x));
