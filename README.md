"# HW11-js-this" 
Создайте на вашем github репозиторий с именем HW11-js-this. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
Создайте index.html в котором подключите js script.
///////////////////////////////////////////////////////////////////////
Реализуйте обьект counter. У которого есть три метода: up, down, showStep. 
При вызове метода up, counter должен увеличиваться на 1
При вызове метода down, counter должен уменьшатся на 1
При вызове метода showStep, должен вернутся текущее значение.
	Реализовать при помощи ключевого слова this.
	counter.up();
	counter.up();
	console.log(counter.showStep()) // выведет 2
Реализуйте функцию конструктор Calculator. Данная функция конструктор должна предоставлять следующие методы: sum, multiply, subtract, divide. Данные методы должны работать через замыкание. Данные методы должны возвращать результат математических вычислений. После имплементации продемонстрируйте работу данных методов: выведете в консоль результаты вычислений.
	let calculator = new Calculator();
	console.log(calculator.sum(1)(2)); // результат 3