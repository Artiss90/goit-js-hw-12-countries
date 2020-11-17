import { defaults } from '@pnotify/core';
import {error, Stack} from '@pnotify/core';

defaults.width = '100%';
// console.log(defaults);

const myStack = new Stack({
  dir1: 'right',
  // spacing1: 25,
  width: '100px',
  context: document.querySelector('.alert-js'),

});

error({
  text: 'Найдено слишком много результатов поиска! Пожалуйста, введите больше значений для поиска',
  stack: myStack
});

