/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0
    let num = Math.abs(x)
    let sign = Math.sign(x)
    while(num>0){
        let toAdd = num % 10
        ans = (ans * 10) + toAdd
        num = Math.trunc(num/10)
    }

    ans = ans*sign
    if(ans< - (2 ** 31) || ans> (2 ** 31) -1) return 0
    return ans
};