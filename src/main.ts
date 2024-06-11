import { log } from './helpers/log';
import './css/style.css'
import { mappedTypes, unityTypes } from './modules';

// mappedTypes();
// unityTypes();

const app = document.querySelector<HTMLDivElement>('#app');
log(app, 'Should we start? Please enter the command');

const userInputEl = document.getElementById('user-input-el');
const userInputForm = document.getElementById('userInputForm');

document.body.addEventListener('click', () => userInputEl?.focus());
userInputEl?.addEventListener('blur', () => userInputEl?.focus());

userInputForm?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  
  const forms: HTMLCollectionOf<HTMLFormElement> | any = document.forms;
  const formEl: HTMLFormElement = forms["userInputForm"];
  const formData: FormData = new FormData(formEl);
  const userInput: FormDataEntryValue | null = formData.get("user_input");
  
  formEl.reset();
  log( app, (userInput || "").toString() );


});