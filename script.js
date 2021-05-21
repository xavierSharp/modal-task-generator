const randomThings = [
    "build a dirt mantion",
    "feed a ghast cake",
    "replace all dirt with sand",
    "build a monkey shrine at bedrock"

]

function myFunction() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle("active");
    modal.children[2].textContent = randomThings[Math.floor(Math.random() * randomThings.length)];
}