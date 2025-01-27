let audio = new Audio('datein/audio/placesound.mp3');

let cells = document.getElementsByClassName("cell");
let popup = document.getElementById("popup");
let winnerMessage = document.getElementById("winnerMessage");

let scorePlayer1Element = document.getElementById("scorePlayer1");
let scorePlayer2Element = document.getElementById("scorePlayer2");

let player1Name = "";
let player2Name = "";

let images = ["img/jedi.png", "img/sith.png"];
let currentPlayer = 0;
let boardState = [null, null, null, null, null, null, null, null, null];
let isGameOver = false;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleClick(index) {
    audio.play();
    if (boardState[index] === null && !isGameOver) {
        boardState[index] = currentPlayer;
        cells[index].innerHTML = `<img src="${images[currentPlayer]}" alt="Spieler ${currentPlayer + 1}" style="user-select: none;">`;

        if (checkWin()) {
            updateScore();
            if (currentPlayer == 0) {
                showPopup(`${player1Name} gewinnt! 🎉`);
            } else {
                showPopup(`${player2Name} gewinnt! 🎉`);
            }
        } else if (!boardState.includes(null)) {
            showPopup("Unentschieden! 😐");
        } else {
            currentPlayer = 1 - currentPlayer;
        }
    }
}

function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let [a, b, c] = winningCombinations[i];
        if (boardState[a] === currentPlayer && boardState[b] === currentPlayer && boardState[c] === currentPlayer) {
            return true;
        }
    }
    return false;
}

function updateScore() {
    if (currentPlayer == 0) {
        scorePlayer1++;
        scorePlayer1Element.textContent = scorePlayer1;
    } else {
        scorePlayer2++;
        scorePlayer2Element.textContent = scorePlayer2;
    }
}

function showPopup(message) {
    isGameOver = true;
    winnerMessage.textContent = message;
    popup.style.display = "flex";
    popup.style.zIndex = '10000000000'
}

function restartGame() {
    boardState = [null, null, null, null, null, null, null, null, null];
    for (let cell of cells) {
        cell.innerHTML = "";
    }
    currentPlayer = 0;
    isGameOver = false;
    popup.style.display = "none";
}




//------------------------------------------------------ Startpage ------------------------------------------------------

let container = document.getElementById('container');
let main = document.getElementById('main');


function start() {
    if (player1Name === "" || player2Name === "") {
        alert("Bitte geben Sie Namen für beide Spieler ein!")
    } else {
        main.style.display = 'none';
        container.style.display = 'block';
    }
}

let rules = document.getElementById('rules-button');
let rulespopup = document.getElementById('rules-popup');

let settings = document.getElementById('settings-button');
let settingspopup = document.getElementById('settings-popup');

let character = document.getElementById('character-button');
let characterpopup = document.getElementById('character-popup');

function active(id) {
    switch (id) {
        case 'rules':
            rules.style.background = 'linear-gradient(146deg, rgba(0,0,0,1) 50%, rgba(135,135,135,1) 96%)'
            rulespopup.style.display = 'block'
            settings.style.background = 'black'
            character.style.background = 'black'
            break
        case 'settings':
            settings.style.background = 'linear-gradient(146deg, rgba(0,0,0,1) 50%, rgba(135,135,135,1) 96%)'
            settingspopup.style.display = 'block'
            character.style.background = 'black'
            rules.style.background = 'black'
            break
        case 'character':
            character.style.background = 'linear-gradient(146deg, rgba(0,0,0,1) 50%, rgba(135,135,135,1) 96%)'
            characterpopup.style.display = 'block'
            rules.style.background = 'black'
            settings.style.background = 'black'
            break
    }
}

function hidepopup(id) {
    switch (id) {
        case 'rules':
            rulespopup.style.display = 'none'
            break
        case 'settings':
            settingspopup.style.display = 'none'
            break
        case 'character':
            characterpopup.style.display = 'none'
            break
    }
}

let chJedi = document.getElementById('jedi-character');
let chSith = document.getElementById('sith-character');

function chooseCharacter(id) {
    switch (id) {
        case 'jedi':
            chJedi.style.opacity = '1'
            chSith.style.opacity = '0'
            break
        case 'sith':
            chSith.style.opacity = '1'
            chJedi.style.opacity = '0'
            images[0] = "img/sith.png"
            images[1] = "img/jedi.png"
            break
    }
}

let musicOn = false;
let backgroundMusic = new Audio('datein/audio/theme.mp3');

function toggleMusic() {
    musicOn = !musicOn;
    if (musicOn) {
        backgroundMusic.play();
        document.getElementById("music-toggle").textContent = "An";
    } else {
        backgroundMusic.pause();
        document.getElementById("music-toggle").textContent = "Aus";
    }
}

let body = document.body;
let temple = document.getElementById('temple');
let sith_base = document.getElementById('sith-base');
let space = document.getElementById('space');

function changeBackground(id) {
    switch (id) {
        case 'jedi-temple':
            body.style.backgroundImage = "url('img/jedi-temple.png')";
            temple.style.border = "2px solid orange"
            sith_base.style.border = "none"
            space.style.border = "none"
            break;
        case 'sith-base':
            body.style.backgroundImage = "url('img/sith-base.png')";
            sith_base.style.border = "2px solid orange"
            temple.style.border = "none"
            space.style.border = "none"
            break;
        case 'space':
            body.style.backgroundImage = "url('https://www.solarsystemscope.com/textures/download/2k_stars.jpg')"
            space.style.border = "2px solid orange"
            temple.style.border = "none"
            sith_base.style.border = "none"
    }
}

function getNames() {
    player1Name = document.getElementById("player1-name").value;
    player2Name = document.getElementById("player2-name").value;
}

function reload() {
    location.reload()
}