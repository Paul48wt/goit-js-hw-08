import storage from './storage';
import throttle from 'lodash.throttle';
const formData = {};
const form = document.querySelector('.feedback-form');
const btnSubmit = document.querySelector('button');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

btnSubmit.addEventListener('click', onBtnSubmitClick);

form.addEventListener('input', onFormTypeText);
const FORM_KEY = 'feedback-form-state';

function onFormTypeText(e) {
  formData[e.target.name] = e.target.value;
  storage.save(FORM_KEY, formData);
}

function populateTextarea() {
  if (formData) {
    console.log(storage.load(FORM_KEY));
  }
}

function onBtnSubmitClick(e) {
  e.preventDefault();
  form.reset();
}
