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