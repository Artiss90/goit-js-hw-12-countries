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
    push: 'bottom',
    context: document.querySelector('.alert-js'),
});

/*Дефолтные настройки pnotify*/
defaults.stack = defaultStack;
defaults.delay = 1500;
console.log(defaults);




