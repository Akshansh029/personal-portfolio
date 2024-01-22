var typed = new Typed("#changing-element", {
    strings: ["Student", "Front-end developer", "Footballer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

function opneGithubProfile(){
    let githubProfile = "https://github.com/Akshansh029";

    window.open(githubProfile, "_blank");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
    navLink.addEventListener("click", event => {
        event.preventDefault();

        const getID = event.currentTarget.getAttribute("href").substring(1);
        const getElement = document.getElementById(getID);

        getElement.scrollIntoView({
            behavior: 'smooth'
        })
    })
});

document.getElementById("Epicurian-link").addEventListener("click", event => {
    window.open("https://epicurian-restaurant.netlify.app/");
})
document.getElementById("Blog-link").addEventListener("click", event => {
    window.open("https://ak-responsive-blog-site.netlify.app/");
})
document.getElementById("Weather-link").addEventListener("click", event => {
    window.open("https://ak-weather-site.netlify.app/");
})
document.getElementById("Rock-paper-scissors-link").addEventListener("click", event => {
    window.open("https://rock-paper-scissors-29.netlify.app/");
})
document.getElementById("Stopwatch-link").addEventListener("click", event => {
    window.open("https://stopwatch-for-beginners.netlify.app/");
})
document.getElementById("Calculator-link").addEventListener("click", event => {
    window.open("https://ak-simple-calculator.netlify.app/");
})
document.getElementById("roadmap.sh").addEventListener("click", event => {
    window.open("https://roadmap.sh/full-stack");
})