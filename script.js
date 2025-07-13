document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    submitForm();
});
const lang = document.documentElement.getAttribute('lang');

//Add a submit function to be able to submit with a click on the image
function submitForm() {
    //Clear the answer section
    let reponseSection = document.getElementById('reponse');
    reponseSection.classList.remove('hidden');
    reponseSection.innerHTML = '';


    //Recover name section and return it
    let nameElement = document.createElement('span')
    document.getElementById('reponse').appendChild(nameElement);

    let userName = document.getElementById('name').value.trim();

    if (lang === 'fr') {
        if (userName !== '') {
            nameElement.textContent = `Bonjour, ${userName} ! Je sens une énergie particulière autour de vous...`
        } else {
            nameElement.textContent = 'Bonjour petit anonyme !'
        }
    }
    else {
        if (userName !== '') {
            nameElement.textContent = `Welcome, ${userName} ! I feel a peculiar energy around you...`
        } else {
            nameElement.textContent = 'Welcome little anonymous !'
        }
    };

    //Question section
    let userQuestion = document.getElementById('question').value.trim();
    let userQuestionElement = document.createElement('div');

    if (lang === 'fr') {
        if (!userQuestion) {
            userQuestionElement.innerHTML = `<br>N'hésitez pas à poser une question à la boule de cristal... Elle brille d'impatience de vous répondre!`
        }
        else {
            let randomNumber = Math.floor(Math.random() * 8) + 1;
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
    }

    else {
        if (!userQuestion) {
            userQuestionElement.innerHTML = `<br> Feel free to ask the crystal ball a question... It glows with anticipation to answer you!`
        }
        else {
            let randomNumber = Math.floor(Math.random() * 8) + 1;
            // +1 to avoid 0
            let eightBall = '';

            switch (randomNumber) {
                case 1: eightBall = 'the stars align in your favor. The answer is YES.'; break;
                case 2: eightBall = 'the spirits whisper a no... Fate can still change.'; break;
                case 3: eightBall = 'the mist of the future is too thick today. Come back later.'; break;
                case 4: eightBall = 'my crystal shows contradictory signs... Caution is advised.'; break;
                case 5: eightBall = 'the ancient Oracles smile - this is the perfect moment!'; break;
                case 6: eightBall = 'the cards show obstacles on your path.'; break;
                case 7: eightBall = 'the energy is neutral. Everything depends on your actions now.'; break;
                case 8: eightBall = 'the great book of destiny opens to the page... YES in letters of fire!'; break;
            }

            userQuestionElement.innerHTML = `<br>What an interesting question "${userQuestion}".<br><br>Let me consult the ball... I think that ${eightBall}`;


        }
    };

    document.getElementById('reponse').appendChild(userQuestionElement);
};





//The carrousel section
const ball1 = document.getElementById("ball");
const ball2 = document.getElementById("ball2");
const ball3 = document.getElementById("ball3");
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

const balls = [ball1, ball2, ball3];
let currentIndex = 0;

// Function to display a specific ball (hide all, show the one at current index, set index)
function showBall(index) {
    balls.forEach(ball => ball.style.display = 'none');
    balls[index].style.display = 'block';
    currentIndex = index;
}

showBall(0);

//To set back to place 0 of the table of balls
nextButton.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= balls.length) nextIndex = 0;
    showBall(nextIndex);
});

//When going from last place to first place of the carousel, even if add content to the table.
prevButton.addEventListener("click", () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = balls.length - 1;
    showBall(prevIndex);
});


