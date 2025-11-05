
const form = document.getElementById('arrivalForm') as HTMLFormElement;
const scheduledInput = document.getElementById('scheduledHour') as HTMLInputElement;
const delayInput = document.getElementById('delayHours') as HTMLInputElement;
const resultOutput = document.getElementById('result') as HTMLOutputElement;

function calculateArrival(scheduledHour: number, delayHours: number): number {
    return (scheduledHour + delayHours) % 24;
}

// Обработчик формы
form.addEventListener('submit', (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    // Парсинг и проверка введённых данных
    const scheduledHour = parseInt(scheduledInput.value);
    const delayHours = parseInt(delayInput.value);

    if (isNaN(scheduledHour) || isNaN(delayHours)) {
        resultOutput.value = 'Ошибка: введите корректные числа';
        return;
    }

    if (scheduledHour < 0 || scheduledHour > 23) {
        resultOutput.value = 'Ошибка: час прибытия должен быть от 0 до 23';
        return;
    }

    if (delayHours < 0) {
        resultOutput.value = 'Ошибка: количество часов опоздания должно быть ≥ 0';
        return;
    }

    const newArrival = calculateArrival(scheduledHour, delayHours);
    resultOutput.value = newArrival.toString();
});
