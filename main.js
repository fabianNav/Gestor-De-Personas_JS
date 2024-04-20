import './css/style.css'
import { insertarDatosDom } from './src/datosFormDom';
import { cambiarTema } from './src/theme'

cambiarTema();

const submit = document.getElementById('formPersona');
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  insertarDatosDom();
});