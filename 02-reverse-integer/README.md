# LeetCode 7: Reverse Integer (JavaScript)

An optimized, robust JavaScript solution for LeetCode Problem #7: **Reverse Integer**. This implementation correctly handles positive numbers, negative numbers, floating-point division quirks in JavaScript, and 32-bit signed integer overflow constraints.

## 🚀 Features

* **Sign Preservation:** Correctly detects and preserves the sign of negative numbers using `Math.sign()`.
* **Safe Division:** Uses `Math.trunc()` instead of standard division to ensure precise integer truncation without floating-point decimal baggage.
* **Overflow Protection:** Validates that the final reversed integer stays strictly within the 32-bit signed integer range ($[-2^{31}, 2^{31} - 1]$), returning `0` if an overflow occurs.
* **Optimal Complexity:** Runs in $\mathcal{O}(\log_{10}(x))$ time and $\mathcal{O}(1)$ constant space.

---

## 💻 Code Implementation

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0;
    let num = Math.abs(x); 
    let sign = Math.sign(x);

    while (num > 0) {
        let toAdd = num % 10;
        ans = (ans * 10) + toAdd;
        num = Math.trunc(num / 10);
    }

    ans = ans * sign;

    // Check 32-bit signed integer bounds
    if (ans < -(2 ** 31) || ans > (2 ** 31) - 1) {
        return 0;
    }

    return ans;
};
```

---

## 📊 Complexity Analysis

* **Time Complexity:** $\mathcal{O}(\log_{10}(x))$ — The algorithm loops once for each digit in the integer $x$.
* **Space Complexity:** $\mathcal{O}(1)$ — Only a few primitive variables (`ans`, `num`, `sign`, `toAdd`) are used, consuming constant extra memory.