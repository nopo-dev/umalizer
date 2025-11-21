import './styles/main.css';
import { createUmaForm } from './components/UmaForm';
import { renderUmaTable } from './components/UmaTable';

// Hook form and table into HTML
const formContainer = document.getElementById('uma-form')!;
createUmaForm(formContainer);
renderUmaTable(); // initial render