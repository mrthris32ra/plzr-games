const emojiSet = ["🔠", "🛟", "🚦", "🫟", "🔣", "🚸", "✈️", "🏔️", "🌉", "🌵", "Ⓜ️", "🚏", "📶", "🔆", "💻", "⚓", "🛣️", "💺"];

let gameBoard = document.getElementById("game-board");
let gridSize = 4;
let firstCard = null, secondCard = null, lockBoard = false;

function startGame() {
    gridSize = parseInt(document.getElementById("grid-size").value);
    resetBoard();
    generateBoard();
}

function generateBoard() {
    let numCards = gridSize * gridSize;
    let selectedEmojis = emojiSet.slice(0, numCards / 2);
    let gameEmojis = [...selectedEmojis, ...selectedEmojis].sort(() => Math.random() - 0.5);

    gameBoard.innerHTML = "";
    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 80px)`;
    gameBoard.style.gridTemplateRows = `repeat(${gridSize}, 80px)`;

    gameEmojis.forEach((emoji, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.setAttribute("data-id", index);

        let front = document.createElement("div");
        front.classList.add("front");
        front.innerText = emoji;

        let back = document.createElement("div");
        back.classList.add("back");
        back.innerText = "96";

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this.classList.contains("flipped")) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetSelection();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetSelection();
        }, 1000);
    }
}

function resetSelection() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function resetBoard() {
    gameBoard.innerHTML = "";
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

startGame();
