function game(playerOne, playerTwo) {
    // playerOne timer starts
    // if playerOne gets a match
    //      they gain one score point
    //      they can go again
    // else if playerOne doesn't get a match
    //      playerOne timer pause
    //      playerOne toggle activate
    //      playerTwo toggle activate
}
document.querySelector('.btn-names').addEventListener('click', function() {
    player1Name = prompt("Please enter the first player's name");
    player2Name = prompt("Please enter the second player's name");

    document.getElementById("name-0").textContent = player1Name;
    document.getElementById("name-1").textContent = player2Name;
})

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const cards = document.querySelectorAll(".card"),
timeZeroTag = document.querySelector(".time0 b"),
timeOneTag = document.querySelector(".time1 b"),
flipsZeroTag = document.querySelector(".flips0 b"),
flipsOneTag = document.querySelector(".flips1 b"),
scoreZeroTag = document.querySelector(".score0 b"),
scoreOneTag = document.querySelector(".score1 b"),
refreshBtn = document.querySelectorAll(".refresh");

let maxTime = 20;
let timeLeftZero = maxTime;
let timeLeftOne = maxTime;
let flipsZero = 0;
let flipsOne = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let isActiveZero = false;
let isActiveOne = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if (isActiveZero) {
        if(timeLeftZero <= 0) {
            return clearInterval(timer);
        }
        timeLeftZero--;
        timeZeroTag.innerText = timeLeftZero;
    }
    if (isActiveOne) {
        if(timeLeftOne <= 0) {
            return clearInterval(timer);
        }
        timeLeftOne--;
        timeOneTag.innerText = timeLeftOne;
    }
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeftZero > 0 && isActiveZero) {
        flipsZero++;
        flipsZeroTag.innerText = flipsZero;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back img").src,
        cardTwoImg = cardTwo.querySelector(".back img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeftZero > 0 && isActiveOne) {
        flipsOne++;
        flipsOneTag.innerOneText = flipsOne;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back img").src,
        cardTwoImg = cardTwo.querySelector(".back img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6 && timeLeftZero > 0 && timeLeftOne > 0) {
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeftZero = maxTime;
    timeLeftOne = maxTime;
    flipsZero = matchedCard = 0;
    flipsOne = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeZeroTag.innerText = timeLeftZero;
    timeOneTag.innerText = timeLeftOne;
    flipsZeroTag.innerText = flipsZero;
    flipsOneTag.innerText = flipsOne;
    disableDeck = isPlaying = false;

    // let arr = [1, 2, 1, 2];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});