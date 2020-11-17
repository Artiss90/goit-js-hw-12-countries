// import { Theme } from './js/task';
import './styles.css';
import  '@ pnotify / core / dist / BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';
// import BSN from 'bootstrap.native';

document

// Manually set the type.
const myAlert = alert({
  text: "I'm an alert.",
  type: 'info'
});

// Automatically set the type.
const myNotice = notice({
  text: "I'm a notice."
});

const myInfo = info({
  text: "I'm an info message."
});

const mySuccess = success({
  text: "I'm a success message."
});

const myError = error({
  text: "I'm an error message."
});


