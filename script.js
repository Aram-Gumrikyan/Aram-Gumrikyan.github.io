let button = document.querySelector('.contact__us__button');
let button_background = document.querySelector('.contact__us__button__background');

function contact__us__div() {
    console.log(button);
}
button.addEventListener("mouseover", addAnimation);
button.addEventListener("mouseout", removeAnimation);

function addAnimation() {
    button_background.classList.remove("button_animation2");
    button_background.classList.add("button_animation");
}

function removeAnimation() {
    button_background.classList.remove("button_animation");
    button_background.classList.add("button_animation2");
}