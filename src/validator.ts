export class BracketValidator {
  private stack: string[] = [];
  private pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  isValid(input: string): boolean {
    this.stack = [];
    for (const char of input) {
      if (['(', '{', '['].indexOf(char) !== -1) {
        this.stack.push(char);
      } else if ([')', '}', ']'].indexOf(char) !== -1) {
        if (this.stack.pop() !== this.pairs[char]) {
          return false;
        }
      }
    }
    return this.stack.length === 0;
  }
}
