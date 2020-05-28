var aboutText = document.querySelector("#about-text");
function aboutAppear() {
    var aboutPosition = aboutText.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.6;
    console.log(screenPosition);
    if (aboutPosition < screenPosition) {
        aboutText.classList.add("text-appear");
    }
}
window.addEventListener("scroll", aboutAppear);


var skills = document.querySelector("#skills");
function skillsAppear() {
    var skillsPosition = aboutText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2.6;
    if (skillsPosition < screenPosition) {
        skills.classList.add("text-appear");
    }
}
window.addEventListener("scroll", skillsAppear);


var projects = document.querySelector(".projects");
function projectsAppear() {
    var projectsPosition = aboutText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 3.6;
    if (projectsPosition < screenPosition) {
        projects.classList.add("text-appear");
    }
}
window.addEventListener("scroll", projectsAppear);