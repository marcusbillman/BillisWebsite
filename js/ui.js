/* ========== SHOW MORE ========== */

const bioContent = document.getElementById("bioContent");
const bioFirstParagraph = document.querySelector(
    ".biography__content p:first-of-type"
);
const showMoreLink = document.getElementById("showMoreLink");
const showMoreLinkIcon = document.getElementById("showMoreLinkIcon");
const showMoreLinkText = document.getElementById("showMoreLinkText");
let showingMore = false;

showLess();

function showMore() {
    bioContent.style.maxHeight = bioContent.scrollHeight + "px";
    showMoreLinkIcon.innerText = "keyboard_arrow_up";
    showMoreLinkText.innerText = "Show less";
    showingMore = true;
}

function showLess() {
    bioContent.style.maxHeight = bioFirstParagraph.scrollHeight + "px";
    showMoreLinkIcon.innerText = "keyboard_arrow_down";
    showMoreLinkText.innerText = "Show more";
    showingMore = false;
}

showMoreLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (showingMore) {
        showLess();
    } else {
        showMore();
    }
});

window.addEventListener("resize", function() {
    if (showingMore) {
        showMore();
    } else {
        showLess();
    }
});

/* ========== BUTTON HOVER EFFECT ========== */

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function(event) {
        event.target.classList.toggle("button--outlined");
    });
    button.addEventListener("mouseleave", function(event) {
        event.target.classList.toggle("button--outlined");
    });
});
