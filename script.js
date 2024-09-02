const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
        }
    });
});
const animateContent = document.querySelectorAll(".show-animaton");
animateContent.forEach((el) => observer.observe(el));


//submit button effects

const submitbtn = document.querySelector("#sendCrypto");
const popup = document.querySelector(".coming-soon");

submitbtn.addEventListener("click", () => {
    submitbtn.textContent = "Coming Soon";
    popup.style.display = "block";
    setTimeout( () => {
        popup.style.display = "none";
        submitbtn.textContent = "Connect To WhatsApp";
    }, 4000)
})
