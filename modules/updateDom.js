import { AddItem, GetFields } from './apiManagement.js';

const formContainer = document.getElementById('formContainer');

console.log(formContainer);

const updateDom = () => { 
  let cAux = '';
  GetFields()
    .then((data) => {
      formContainer.innerHTML =data.html;
    });
  };

export default updateDom;