import { BracketValidator } from './validator.js';

export function setupForm() {
  const form = document.getElementById('bracketForm') as HTMLFormElement;
  const input = document.getElementById('bracketInput') as HTMLInputElement;
  const result = document.getElementById('result') as HTMLParagraphElement;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validator = new BracketValidator();
    const isValid = validator.isValid(input.value);
    result.textContent = isValid ? 'Строка валидна' : 'Строка невалидна';
  });
}
