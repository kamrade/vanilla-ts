import { log } from './helpers/log';
import './css/style.css'
import { mappedTypes, unityTypes } from './modules';

// mappedTypes();
unityTypes();

const app = document.querySelector<HTMLDivElement>('#app');
log(app, 'Some inner text 1');
log(app, 'Some other text 2');
log(app, 'Some another new inner text 3');

