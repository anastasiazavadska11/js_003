// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

{
    const  result = 5+5+'5';
    console.log(result);
}

// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. 
// Результат виведіть в консоль.

{
    const email = 'zavadska.anastasiia@gmail.com';
    console.log(`Is includes @ - ${email.includes('@')}, length = ${email.length}`);
}

// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

{
    const str1 = 'My';
    const str2 = 'name';
    const str3 = 'is';
    let fullName = str1 + ' ' + str2 + ' ' + str3;
    fullName += ' ' + 'Viktor';
    console.log(fullName);
}

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі 
// цього: «Дякуємо, Олександро! До сплати 300 гривень»

{
    const userName = 'Олександрa';
    const payment = 300;
    alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
}
