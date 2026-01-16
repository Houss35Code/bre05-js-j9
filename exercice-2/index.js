// vos imports ici
import {numbers} from "./numbers.js";

window.addEventListener("DOMContentLoaded", () => {
   // Affichage de chaque valeur du tableau
   numbers.forEach(number => {
      console.log(number);
   });
});
