import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let inputValue = {
  email: '',
  message: '',
};

formEl.form.addEventListener('submit', onFormSubmit);
formEl.form.addEventListener('input', throttle(onFormInput, 1));

function onFormSubmit(evt) {
  evt.preventDefaukt();

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(evn) {
  const message = evn.currentTarget.value;
  console.log(message);
  localStorage.setItem('feedback-form-state', message);
}
