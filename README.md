Имя команды: ts-pair-sysoeva-malyavkina
Участники: Малявкина Маргарита Александровна - MargoDeFuego

Библиотеки для валидации форм:
1. Validator.js (23.7k stars) - Проверка строк (email, URL, даты и пр.) 
Последний коммит: last week Свежесть: высокая
Документация: простая Сложность: низкая
(https://github.com/validatorjs/validator.js)

2. Zod (40.8k stars) - Типизированная валидация для TypeScript
Последний коммит: yesterday Свежесть: очень высокая
Документация: подробная Сложность: средняя
(https://github.com/colinhacks/zod)

3. Formik (34.3k stars) - Управление формами и валидация в React
Последний коммит: last week Свежесть: высокая
Документация: подробная Сложность: средняя
(https://github.com/jaredpalmer/formik)

4. Joi (21.2k stars) - Схемная валидация для Node.js
Последний коммит: 2 hours ago Свежесть: очень высокая
Документация: подробная Сложность: высокая
(https://github.com/hapijs/joi)

5. Yup (23.6k stars) - Декларативная валидация объектов
Последний коммит: 2 months ago Свежесть: средняя
Документация: понятная Сложность: средняя
(https://github.com/jquense/yup)

Точка входа для Zod:
import { z } from "zod";

Минимальный набор объектов:
const schema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  age: z.number().int().positive(),
  email: z.string().email("Неверный формат email"),
});

Основные методы:
.min(n)        минимальная длина строки или число
.max(n)       максимальная длина
.email()       проверка email‑формата
.int()          проверка на целое число
.positive()    проверка на положительное значение
.refine()       кастомная проверка с функцией
.optional()    необязательное поле
.default()     значение по умолчанию

Типы данных:

z.string() — строка
z.number() — число                    z.date() — дата
z.boolean() — булев тип               z.null() — пустое значение
z.array() — массив                    z.undefined() — пустое значение
z.enum([...]) — перечисление
z.union([A, B]) — одно из нескольких типов
z.literal("значение") — строгое значение
