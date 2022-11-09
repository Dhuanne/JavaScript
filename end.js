const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const quiz = document.getElementById('quiz');
const highScores = JSON.parse(localStorage.getItem('scores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//This function will save the student's score
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    //Push the student's score
    highScores.push(score);
    //Sort whoever has the highest score
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    //Set the scores of students
    localStorage.setItem('scores', JSON.stringify(highScores));
    window.location.assign('/');

    //Return to home
    window.location.href = "index.html"
};



