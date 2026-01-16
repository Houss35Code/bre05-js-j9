// Export de la fonction changeTextColor
export function changeTextColor(elementId, color) {
   // Récupération de l'élément par son ID
   const element = document.getElementById(elementId);
   
   // Modification de la couleur du texte
   if (element) {
      element.style.color = color;
   }
}