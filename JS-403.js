function zagrade (s)  {
    let stog = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i <s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stog.push(s[i]);
        }
        else {
            let last = stog.pop();
            if (s[i] !== map[last]) {
                return false
            };
        }
    }
    if (stog.length !== 0) {
        return false
    };
    return true;
}
console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false