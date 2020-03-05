const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function(event) {
        event.target.classList.toggle("button--outlined");
    });
    button.addEventListener("mouseleave", function(event) {
        event.target.classList.toggle("button--outlined");
    });
});
