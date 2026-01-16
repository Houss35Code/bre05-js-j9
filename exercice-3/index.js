// Import du tableau numbers depuis numbers.js
import { numbers } from './numbers.js';

// Import de la fonction computeAverage depuis functions.js
import { computeAverage } from './functions.js';

window.addEventListener("DOMContentLoaded", () => {
   // Appel de la fonction computeAverage avec le tableau numbers
   computeAverage(numbers);
});