let money = prompt(Number('Ваш бюджет на месяц'))
let time = prompt('Введите дату в формате YYYY-MM-DD')

let mainExpenses = prompt('Введите обязательную статью расходов в этом месяце')
let amount = prompt(Number('Во сколько обойдется?'))
const array = []

let appData = {
    бюджет: money,
    dateTime: time,
    expenses: mainExpenses + ':', amount,  
    optionalExpenses: '',
    income: array,
    savings:false
}

alert((money-amount)/30)

//Ответы на контрольные вопросы:
// 1) В js существует 7 типа данных: строка, символ, логическое значение, null, undefined, объект
// 2) Для вывода информации в консоль используется команда console.log()
// 3) || означает 'или', а && означает 'и'