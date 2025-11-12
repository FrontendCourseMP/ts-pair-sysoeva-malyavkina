import { BracketValidator } from '../dist/validator';
export function setupForm() {
    const form = document.getElementById('bracketForm');
    const input = document.getElementById('bracketInput');
    const result = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const validator = new BracketValidator();
        const isValid = validator.isValid(input.value);
        result.textContent = isValid ? 'Строка валидна ✅' : 'Строка невалидна ❌';
    });
}
