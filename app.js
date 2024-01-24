const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

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
function mailTo(){
    let mailTo = "mailto:akshanshsingh00@gmail.com";

    window.open(mailTo, "_blank");
}
document.getElementById("brittany-site").addEventListener("click", event => {
    window.open("https://v4.brittanychiang.com/", "_blank");
})

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

let projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(projectItem => {
    let childElements = projectItem.children;
    let h2Element = childElements[1];

    projectItem.addEventListener('mouseover', event => {
        h2Element.classList.add("heading-hover");
    })
    projectItem.addEventListener('mouseout', event => {
        h2Element.classList.remove("heading-hover");
    })
});

function updateFixedElementPosition() {
        const fixedElement = document.getElementById('media-links');
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // console.log(window);
        // console.log(viewportWidth);
        // console.log(viewportHeight);
        if((viewportHeight < 675) && (viewportWidth < 440)){
            document.getElementById("about").style.marginTop = "20rem"
        }
        else if(viewportHeight < 560){
                        document.getElementById("about").style.marginTop = "20rem";
        }
        else if(viewportHeight < 460){
            document.getElementById("about").style.marginTop = "20rem";
            document.getElementById("about").style.height = "fit-content";
                        document.getElementById("footer").style.marginTop = "20rem";
        }
        else{
            document.getElementById("about").style.marginTop = "5rem";
            document.getElementById("footer").style.marginTop = "10rem";
        }

        if (viewportWidth < 769) {
            fixedElement.style.position = 'relative';   
            fixedElement.style.bottom = '80px';
            fixedElement.style.left = '0px';
            fixedElement.style.marginInline = 'auto';
            fixedElement.style.marginBottom = '2rem';
            fixedElement.children[0].style.flexDirection = "row";
            document.getElementById('footer').appendChild(fixedElement);
        } else {
            fixedElement.style.position = 'fixed';
            fixedElement.style.bottom = '0';
            fixedElement.style.left = '50px';
            fixedElement.style.marginBottom = '0';

            fixedElement.children[0].style.flexDirection = "column";
            document.body.appendChild(fixedElement);
        }
    }

updateFixedElementPosition();

window.addEventListener('resize', updateFixedElementPosition);