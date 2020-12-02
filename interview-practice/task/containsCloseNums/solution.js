function containsCloseNums(nums, k) {
    let dict = {}
    for (let i = 0; i<nums.length; i++){
        if (dict[nums[i]] !== undefined && i <= dict[nums[i]]) return true
        dict[nums[i]] = i + k 
    }
    return false
}
