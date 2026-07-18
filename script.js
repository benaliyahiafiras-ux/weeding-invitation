const seal = document.getElementById("seal");
const openBtn = document.getElementById("openBtn");
const flap = document.getElementById("flap");
const openBtn2 = document.querySelector(".open-btn2");
const detailsPage = document.getElementById("detailsPage");
const flowers = document.querySelectorAll(".flower-top-left, .flower-bottom-right");


seal.addEventListener("click", openInvitation);
openBtn.addEventListener("click", openInvitation);


function openInvitation(){

    seal.classList.add("seal-hide");
    openBtn2.classList.add("hide-btn");

    setTimeout(() => {

        flap.classList.add("flap-open");

    },600);


    setTimeout(()=>{

    detailsPage.classList.add("details-show");

    flowers.forEach(flower=>{
        flower.style.opacity="0";
    });

  },1500);


}

const weddingDate = new Date("August 18, 2026 16:00:00").getTime();


setInterval(()=>{

    const now = new Date().getTime();

    const distance = weddingDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


},1000);