document.getElementById('monFormulaire').addEventListener('submit', function(e) {
    e.preventDefault(); 

    //Clear the answer section
let reponseSection = document.getElementById('reponse');
reponseSection.classList.remove('hidden');
reponseSection.innerHTML = '';


//Recovery firstname section and return it
let prenomElement = document.createElement('span')
document.getElementById('reponse').appendChild(prenomElement);

let userName = document.getElementById('prenom').value.trim();

if (userName !== '') { 
prenomElement.textContent  =`Bonjour, ${userName} ! Je sens une énergie particulière autour de vous...`
} else {
  prenomElement.textContent  ='Bonjour petit anonyme !'
}

//Question section
let userQuestion = document.getElementById('question').value.trim();
let userQuestionElement = document.createElement('div');

if (!userQuestion) { 
    userQuestionElement.innerHTML = `<br>N'hésitez pas à poser une question à la boule de cristal... Elle brille d'impatience de vous répondre!` } 
    else {
    let randomNumber = Math.floor(Math.random() * 8)+ 1;
    // +1 to avoid 0
    let eightBall = '';
    
    switch (randomNumber) {
        case 1: eightBall = 'les étoiles s\'alignent en ta faveur. La réponse est OUI.'; break;
        case 2: eightBall = 'les esprits chuchotent un non... Le destin peut encore changer.'; break;
        case 3: eightBall = 'la brume du futur est trop épaisse aujourd\'hui. Reviennez plus tard.'; break;
        case 4: eightBall = 'mon cristal montre des signes contradictoires... La prudence est de mise.'; break;
        case 5: eightBall = 'les anciens Oracles sourient - c\'est le moment parfait!'; break;
        case 6: eightBall = 'les cartes montrent des obstacles sur votre chemin.'; break;
        case 7: eightBall = 'l\'énergie est neutre. Tout dépend de vos actions maintenant.'; break;
        case 8: eightBall = 'le grand livre du destin s\'ouvre à la page... OUI en lettres de feu!'; break;
    } 

userQuestionElement.innerHTML = `<br>En voilà une question intéressante "${userQuestion}".<br><br>Laissez moi consulter la boule... Je pense que ${eightBall}`
}


document.getElementById('reponse').appendChild(userQuestionElement);

});

//The carrousel section
const boule1 = document.getElementById("boule");
const boule2 = document.getElementById("boule2");
const boule3 = document.getElementById("boule3");
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

const boules = [boule1, boule2, boule3]; 
let currentIndex = 0;

// Function to display a specific ball (hide all, show the one at current index, set index)
function showBoule(index) {
    boules.forEach(boule => boule.style.display = 'none');
    boules[index].style.display = 'block';
    currentIndex = index;
}

showBoule(0);

//To set back to place 0 of the table of balls
nextButton.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= boules.length) nextIndex = 0;
    showBoule(nextIndex);
});

//When going from last place to first place of the carousel, even if add content to the table.
prevButton.addEventListener("click", () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0 ) prevIndex = boules.length - 1;
    showBoule(prevIndex);
});


