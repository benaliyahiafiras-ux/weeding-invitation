const seal = document.getElementById("seal");
const flap = document.getElementById("flap");
const envelope = document.querySelector(".envelope-section");
const hero = document.querySelector(".hero");
const flowers = document.querySelectorAll(".flower-top-left, .flower-bottom-right");

seal.addEventListener("click", openInvitation);

function openInvitation() {

    seal.classList.add("seal-hide");

    setTimeout(() => {

        flap.classList.add("flap-open");

    }, 600);

    setTimeout(() => {

        envelope.style.display = "none";

        hero.style.display = "flex";
        hero.style.animation = "fadeIn 1s ease";

        flowers.forEach(flower => {
            flower.style.opacity = "1";
        });

    }, 1500);

}


const weddingDate = new Date("August 18, 2026 16:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);