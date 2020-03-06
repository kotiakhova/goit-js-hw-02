'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  let validResult = false;
  if (login.length >= 4 && login.length <= 16 ) {
    validResult = true;
  } 
  return validResult;
};

const isLoginUnique = function(allLogins, login) {
    let uniqueResult = true;
    let element;
  for (element of allLogins ) {
      if (element === login) {
        uniqueResult = false;
      }
  }
  return uniqueResult;
};

const addLogin = function(allLogins, login) {
    let addResult;
  if ( isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    addResult = 'Логин успешно добавлен!';
  } else {
      if (isLoginValid(login) === false) {
        addResult = 'Ошибка! Логин должен быть от 4 до 16 символов';
      } else {
        addResult = 'Такой логин уже используется!';
      }
  }
  return addResult;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'