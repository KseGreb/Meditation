const timer = 5;
let amountTime = timer * 60;

const button = document.querySelector("#myButton");
button.addEventListener("click", meditate);

function meditate(){

    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();

    let time = setInterval(calculateTime, 1000);

    function calculateTime(){
        const countdowwn = document.querySelector("#countdowwn");
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
    
        if(seconds<10){
            seconds = "0" + seconds;
        }
    
        countdowwn.textContent = `${minutes} : ${seconds}`;
        amountTime--;
    
        if(amountTime < 0){
            clearInterval(time);
            amountTime = 0;
        }
    }
}




