function twoSum(nums, target) {

    /* ------------------------ hash map --------------------------
    */
    // T.C = O(n)
    // S.C = O(n)
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return []
    //------------------------- while loop ---------------------------
    /*
    let left =0,right=left+1
    let sum=nums[left]+nums[right]
    let answer=null
    let c=0
    while(true){
        c++
        sum=nums[left]+nums[right]
        if(sum==target){
            answer=[left,right]
            break
        }right++
        if(right>=nums.length){
            left++
            right=left+1
        }if(left>=nums.length)
        break
    
    }
    console.log(c)
    return answer
    */
    //------------------- for loop ------------------------
    /*
        for (let i =0 ; i< nums.length-1 ; i++){
            for (let j = i+1 ; j < nums.length ; j++){
                if(nums[i] + nums[j]  == target){
                    return ([i,j])
                }
            }
        }return false
    */
};
let nums = [2, 7, 11, 15], target = 9 // output = [0, 1]
console.log(twoSum(nums, target));
