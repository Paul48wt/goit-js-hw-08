import storage from './storage';
import throttle from 'lodash.throttle';
const formData = {};
const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const FORM_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormTypeText, 500));
populateTextarea();
function onFormTypeText(e) {
  formData[e.target.name] = e.target.value;
  storage.save(FORM_KEY, formData);
}

function populateTextarea() {
  if (localStorage.getItem(FORM_KEY)) {
    emailInput.value = storage.load(FORM_KEY).email;
    messageInput.textContent = storage.load(FORM_KEY).message;
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(storage.load(FORM_KEY));
  e.currentTarget.reset();
  storage.remove(FORM_KEY);
});
