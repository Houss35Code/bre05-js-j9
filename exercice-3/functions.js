// Export de la fonction computeAverage
export function computeAverage(numbers) {
   // Calcul de la somme des nombres
   const sum = numbers.reduce((acc, num) => acc + num, 0);
   
   // Calcul de la moyenne
   const average = sum / numbers.length;
   
   // Affichage de la moyenne
   console.log(average);
}