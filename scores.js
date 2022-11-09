const highScoresList = document.getElementById("highScoresList");
const score = JSON.parse(localStorage.getItem("scores")) || [];

highScoresList.innerHTML = score
  //maos the score odf the student
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}/25</li>`;
  })
  .join("");

// Clears local Storage
function clearLocalStorage() {
    localStorage.clear(); //Clears the local storage 
    location.reload();//refreshes the local storage
}
