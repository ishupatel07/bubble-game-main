let timer = 10;
let score = 0;
let hitRn = 0;
function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score   
}

document.querySelector(".pbot").addEventListener('click', function(details)  {
    let clickedNum = Number(details.target.textContent)    
    if(clickedNum === hitRn){
        increaseScore()
        makeBubble();
        getNewHit()
        }

})


function getNewHit(){
    hitRn = Math.floor(Math.random() *10)
    document.querySelector("#hitval").innerHTML = hitRn
}
getNewHit()

function makeBubble(){
    let clutter = ""

for(let i = 1; i <= 170; i++){
    let rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector(".pbot").innerHTML = clutter
}

makeBubble();


function runTimer(){
    let timeInt = setInterval(function(){
        if(timer > 0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timeInt)
            document.querySelector(".pbot").innerHTML = `<h1>Game Over- Your Score ${score}</h1>`
        }
    },1000)
}
    runTimer();

