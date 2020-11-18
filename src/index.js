import './styles.css';
// import BSN from 'bootstrap.native';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
// import { alert, notice, info, success, error } from '@pnotify/core';
import './js/base';

import { Stack, defaults} from '@pnotify/core';

/*Дефолтные настройки pnotify*/
const defaultStack = new Stack({
    dir1: 'up',
    // delay: 3000,
    // maxOpen: 1,
    // maxStrategy: 'close',
    push: 'bottom',
    context: document.querySelector('.alert-js'),
});

/*Дефолтные настройки pnotify*/
// defaults.width = '100%';
defaults.stack = defaultStack;
defaults.delay = 1500;
console.log(defaults);


// const myStack = new Stack({
//     dir1: 'down',
//   context: document.querySelector('.alert-js'),
// });
// console.log(myStack);

// error({
//   text: 'Найдено слишком много результатов поиска! Пожалуйста, введите больше значений для поиска',
//   stack: myStack
// });
//////

// // Manually set the type.
// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info'
// });

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice."
// });

// const myInfo = info({
//   text: "I'm an info message."
// });

// const mySuccess = success({
//   text: "I'm a success message."
// });

// const myError = error({
//   text: "Найдено слишком много результатов поиска! Пожалуйста, введите больше значений для поиска"
// });


