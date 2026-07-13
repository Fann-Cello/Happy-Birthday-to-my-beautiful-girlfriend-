alert("Javascript aktif");

// =====================================
// START WEBSITE
// =====================================
// =====================================
// START WEBSITE
// =====================================

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");


if(startBtn){

    startBtn.addEventListener("click", function(){

        const opening = document.getElementById("opening");

        opening.style.opacity = "0";

        setTimeout(function(){

            opening.style.display = "none";

        },1000);


        bgMusic.play();


        createHearts();


    });

}

// =====================================
// TYPING EFFECT
// =====================================

if(document.getElementById("typing")){

    new Typed("#typing", {

        strings: [
            "Untuk Kamu ❤️",
            "Seseorang Yang Sangat Berarti Bagiku ❤️",
            "Selamat Ulang Tahun Sayang 🎂"
        ],

        typeSpeed:80,
        backSpeed:40,
        loop:true

    });

}

// =====================================
// LOVE BUTTON
// =====================================

const loveBtn = document.getElementById("loveBtn");

if(loveBtn){

    loveBtn.addEventListener("click", function(){

        confetti({
            particleCount:150,
            spread:100,
            origin:{
                y:0.6
            }
        });

    });

}


// =====================================
// COUNTDOWN 14 JULI
// =====================================

const birthday = new Date("July 14, 2026 00:00:00");


function updateCountdown(){

    const now = new Date();

    const distance = birthday - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /(1000*60*60)
    );


    const minutes = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );


    const seconds = Math.floor(
        (distance % (1000*60))
        /1000
    );


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}


setInterval(updateCountdown,1000);

updateCountdown();


// =====================================
// 100 ALASAN
// =====================================


const reasons = [

"Kamu selalu membuat hariku menjadi lebih indah ❤️",

"Senyummu adalah hal yang selalu ingin aku lihat",

"Aku selalu pengen kamu tau rasanya dicintai sedalam ini",

"Aku sayang banget sama kamu <3",

"Kamu adalah orang yang sangat spesial bagiku"

];


let index = 0;


const reasonText = document.getElementById("reasonText");

const nextReason = document.getElementById("nextReason");


if(nextReason){

    nextReason.addEventListener("click", function(){

        index++;

        if(index >= reasons.length){
            index = 0;
        }

        reasonText.innerHTML = reasons[index];

    });

}



// =====================================
// GIFT BOX
// =====================================

const giftBox = document.getElementById("giftBox");


if(giftBox){

    giftBox.addEventListener("click",function(){

        confetti({
            particleCount:200,
            spread:150
        });

        alert("Hadiah terbesar dalam hidupku adalah bisa mengenal kamu ❤️");

    });

}


// =====================================
// FLOATING HEART
// =====================================


function createHearts(){


    setInterval(()=>{


        const heart = document.createElement("div");


        heart.className="heart";

        heart.innerHTML="❤️";


        heart.style.left=Math.random()*100+"vw";


        heart.style.animationDuration=
        (Math.random()*3+3)+"s";


        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },6000);



    },300);


}

// =====================================
// SCROLL ANIMATION
// =====================================

AOS.init({

    duration:1000,

    once:true

});
