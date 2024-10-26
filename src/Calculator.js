/**
 * Класс для выполнения базовых арифметических операций.
 */
class Calculator {
    /**
     * Сложение двух чисел.
     * @param {number} a - Первое число.
     * @param {number} b - Второе число.
     * @returns {number} Сумма a и b.
     */
    add(a, b) {
        return a + b;
    }

    /**
     * Вычитание второго числа из первого.
     * @param {number} a - Первое число.
     * @param {number} b - Второе число.
     * @returns {number} Результат вычитания b из a.
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * Умножение двух чисел.
     * @param {number} a - Первое число.
     * @param {number} b - Второе число.
     * @returns {number} Произведение a и b.
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Деление первого числа на второе.
     * @param {number} a - Делимое.
     * @param {number} b - Делитель.
     * @returns {number} Результат деления a на b.
     * @throws {Error} Если b равно 0.
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно.");
        }
        return a / b;
    }
}

// Экспортируем класс для использования в других модулях
module.exports = Calculator;