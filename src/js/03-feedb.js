import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

const FEEDBACK_KEY = 'feedback-form-state';
let inputValue = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));
messageTeatarea();

function onFormInput(e) {
  inputValue[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(inputValue));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (emailEl.value === '' || messageEl.value === '') {
    alert('Please fill in all fields');
    return;
  }
  console.log(inputValue);
  e.target.reset();
  inputValue = {};
  localStorage.removeItem(FEEDBACK_KEY);
}

function messageTeatarea() {
  const savedMessage = localStorage.getItem(FEEDBACK_KEY);
  if (savedMessage) {
    inputValue = JSON.parse(savedMessage);
    emailEl.value = inputValue.email || '';
    messageEl.value = inputValue.message || '';
  }
}
