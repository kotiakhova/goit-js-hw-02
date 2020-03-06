'use strict'

const checkForSpam = function(message) {
    let newMessage = message.toLowerCase();
    let array = newMessage.split(' ');
    let a = false;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].includes('sale') || array[i].includes('spam') ) {
            a = true;
        }
    }

    return a;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true