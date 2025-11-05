"use strict";
// Получаем элементы формы и вывода
const form = document.getElementById('arrivalForm');
const scheduledInput = document.getElementById('scheduledHour');
const delayInput = document.getElementById('delayHours');
const resultOutput = document.getElementById('result');
// Функция расчета нового времени
function calculateArrival(scheduledHour, delayHours) {
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
