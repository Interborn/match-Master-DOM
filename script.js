const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsZeroTag = document.querySelector(".flips0 b"),
flipsOneTag = document.querySelector(".flips1 b"),
scoreZeroTag = document.querySelector(".score0 b"),
scoreOneTag = document.querySelector(".score1 b"),
restartBtn = document.querySelector(".restart");

let maxTime = 20;
let timeLeft = maxTime;
let flipsZero = 0;
let flipsOne = 0;
let scoreZero = 0;
let scoreOne = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let isActiveZero = 0;
let isActiveOne = 0;
let cardOne, cardTwo, timer;

function initTimer() {
    if (timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard ({target: clickedCard}) {
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        cardOneImg = cardOne.querySelector(".back img").src,
        cardTwoImg = cardTwo.querySelector(".back img").src;
        matchCards(cardOneImg, cardTwoImg);
        if (isActiveZero == 1 && isActiveOne == 0) {
            flipsZero++;
            flipsZeroTag.innerText = flipsZero;
            if (flipsZero % 2 == 0) {
                isActiveZero = 0;
                isActiveOne = 1;
            }
        } else if (isActiveZero == 0 && isActiveOne == 1) {
            flipsOne++;
            flipsOneTag.innerText = flipsOne;
            if (flipsOne % 2 == 0) {
                isActiveZero = 1;
                isActiveOne = 0;
            }
        }
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;
        if (matchedCard == 8 && timeLeft > 0) {
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        if (isActiveZero == 1 && isActiveOne == 0) {
            scoreZero++;
            scoreZeroTag.innerText = scoreZero;  
        }
        if (isActiveZero == 0 && isActiveOne == 1) {
            scoreOne++;
            scoreOneTag.innerText = scoreOne;
        }
        return disableDeck = false;
    }

    setTimeout (() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout (() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    isActiveZero = 1;
    isActiveOne = 0;
    timeLeft = maxTime;
    scoreZero = matchedCard = 0;
    scoreOne = matchedCard = 0;
    flipsZero = matchedCard = 0;
    flipsOne = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsZeroTag.innerText = flipsZero;
    flipsOneTag.innerText = flipsOne;
    scoreZeroTag.innerText = scoreZero;
    scoreOneTag.innerText = scoreOne;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
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


// Set Active User
// Prompt User for Difficulty & Theme
// Listen for Difficulty & Theme
// 


// function round() {
//     if (isActiveZero && !isActiveOne) {
//         isActiveZero = false;
//         isActiveOne = true;
//     }
//     if (!isActiveZero && isActiveOne) {
//         isActiveZero = true;
//         isActiveOne = false;
//     }
// }

shuffleCard();

restartBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});