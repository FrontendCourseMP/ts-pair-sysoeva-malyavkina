export class BracketValidator {
    constructor() {
        this.stack = [];
        this.pairs = {
            ')': '(',
            '}': '{',
            ']': '[',
        };
    }
    isValid(input) {
        this.stack = [];
        for (const char of input) {
            if (['(', '{', '['].indexOf(char) !== -1) {
                this.stack.push(char);
            }
            else if ([')', '}', ']'].indexOf(char) !== -1) {
                if (this.stack.pop() !== this.pairs[char]) {
                    return false;
                }
            }
        }
        return this.stack.length === 0;
    }
}
