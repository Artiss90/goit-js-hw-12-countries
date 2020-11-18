import { defaults, error } from '@pnotify/core';
import {error, Stack} from '@pnotify/core';

/*Дефолтные настройки pnotify*/
defaults.width = '100%';
// console.log(defaults);

const myStack = new Stack({
  context: document.querySelector('.alert-js'),
});

error({
  text: 'Найдено слишком много результатов поиска! Пожалуйста, введите больше значений для поиска',
  stack: myStack
});
////////