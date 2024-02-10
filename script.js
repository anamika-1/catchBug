const squares = document.querySelectorAll('.square')
const fly = document.querySelector('.bug')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')
const button = document.querySelector('.startBtn')


let result = 0
let hitPosition
let timer = null
let currentTime = 30
let countDownTimerId

function randomSquare(){
    squares.forEach(square => {
       square.classList.remove('bug') 
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('bug')

    hitPosition = randomSquare.id
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id ==  hitPosition){
            result = result + 1
            score.innerHTML = result
            hitPosition = null
        }
    })
})

function moveBug(){
    timer = setInterval(randomSquare, 1000)
}

function countDown(){
    currentTime--
    timeLeft.innerHTML = currentTime

    if(currentTime === 0){
        clearInterval(countDownTimerId)
        clearInterval(timer)
        button.textContent = "PLAY AGAIN"
        button.style.width = "150px"

        //new code
        button.addEventListener('click', playAgain);
    }   
}

function playAgain(){
    result = 0;
    currentTime = 10;
    score.innerHTML = result;
    timeLeft.innerHTML = currentTime;
    button.textContent = "START"

    //new code
    clearInterval(countDownTimerId)
    clearInterval(timer)
    moveBug()
    countDownTimerId = setInterval(countDown, 1000);
    button.removeEventListener('click', playAgain);
}

function activefunctions(){
    moveBug()
    countDownTimerId = setInterval(countDown, 1000)
}




