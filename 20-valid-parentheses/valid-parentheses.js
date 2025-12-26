/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // If opening bracket, push to stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } 
        // If closing bracket
        else {
            // Stack empty or top doesn't match
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    // Stack must be empty for valid string
    return stack.length === 0;
};
