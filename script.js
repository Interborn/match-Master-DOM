const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 20;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
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
        if(matchedCard == 6 && timeLeft > 0) {
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
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,];
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

// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
const simple = document.querySelector(".simple").click();
const easy = document.querySelector(".easy").click();
const normal = document.querySelector(".normal").click();
const hard = document.querySelector(".hard").click();
const expert = document.querySelector(".expert").click();

const gameboard = document.getElementsByClassName("gameboard");
const cards = document.getElementsByClassName("cards");
const card = document.getElementsByClassName("card");



document.querySelector(".difficulty").addEventListener("click", function(){
    // If Simple is selected, change gameboard to 2 x 2 (4)
    // If Easy is selected, change gameboard to 4 x 4 (16)
    // If Normal is selected, change gameboard to 6 x 6 (36)
    // If Hard is selected, change gameboard to 8 x 8 (64)
    // If Expert is selected, change gameboard to 10 x 10 (100)

    if(simple) {
        document.querySelector("gameboard").classList.add("");
        document.querySelector("cards").classList.add("");
        document.querySelector("card").classList.add("");
        document.querySelector("gameboard").classList.remove("");
        document.querySelector("cards").classList.remove("");
        document.querySelector("card").classList.remove("");
    } else if(easy) {
        document.querySelector("gameboard").classList.add("");
        document.querySelector("cards").classList.add("");
        document.querySelector("card").classList.add("");
        document.querySelector("gameboard").classList.remove("");
        document.querySelector("cards").classList.remove("");
        document.querySelector("card").classList.remove("");
    } else if(normal) {
        document.querySelector("gameboard").classList.add("");
        document.querySelector("cards").classList.add("");
        document.querySelector("card").classList.add("");
        document.querySelector("gameboard").classList.remove("");
        document.querySelector("cards").classList.remove("");
        document.querySelector("card").classList.remove("");
    } else if(hard) {
        document.querySelector("gameboard").classList.add("");
        document.querySelector("cards").classList.add("");
        document.querySelector("card").classList.add("");
        document.querySelector("gameboard").classList.remove("");
        document.querySelector("cards").classList.remove("");
        document.querySelector("card").classList.remove("");
    } else if(expert) {
        document.querySelector("gameboard").classList.add("");
        document.querySelector("cards").classList.add("");
        document.querySelector("card").classList.add("");
        document.querySelector("gameboard").classList.remove("");
        document.querySelector("cards").classList.remove("");
        document.querySelector("card").classList.remove("");
    }

    //     // 1. Get the random number
    //     let dice = Math.floor((Math.random() * 6)) + 1;

    //     // 2. Display the result
    //     let diceDOM = document.querySelector(".dice");
    //     // diceDOM.classList.add("animate__animated");
    //     // diceDOM.classList.add("animate__shakeX");
    //     diceDOM.style.display = "block";
    //     diceDOM.src = "/assets/img/dice-" + dice + "-dark.png";


    //     // 3. Update the roundScore, but only if that's not 1
    //     if(dice !== 1) {
    //         //Add score
    //         roundScore += dice;
    //         document.querySelector("#current-" + activePlayer).textContent = roundScore;

    //     } else {
    //         // Next player
    //         failAudio.play();
    //         failAudio.volume = 0.4;
    //         nextPlayer()
    //     }
    // }
});