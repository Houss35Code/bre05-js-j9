// Import de la fonction changeTextColor depuis dom-utils.js
import { changeTextColor } from './dom-utils.js';

window.addEventListener("DOMContentLoaded", () => {
   // Appel de la fonction pour passer le texte en rouge
   changeTextColor('text-to-color', 'red');
});