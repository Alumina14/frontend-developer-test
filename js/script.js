// carousel

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image-container");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// incremanta e decrementa valore input


// incrementa

let incrementaBtn = document.getElementsByClassName('incrementa');
let decrementaBtn = document.getElementsByClassName('decrementa');

for (let i = 0; i < incrementaBtn.length; i++) {
    let button = incrementaBtn[i];
    button.addEventListener('click', function (event) {

        let buttonClicked = event.target;

        let input = buttonClicked.parentElement.children[1];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })
}

// decrementa 

for (let i = 0; i < decrementaBtn.length; i++) {
    let button = decrementaBtn[i];
    button.addEventListener('click', function (event) {

        let buttonClicked = event.target;

        let input = buttonClicked.parentElement.children[1];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) - 1;
        input.value = newValue;

        if (newValue >= 0) {

            input.value = newValue;
        }
        else {
            input.value = 0;
        }

    })
}