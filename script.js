// name variable
let Name = "Amara Hill";

// degree variable
let Degree = "Advancing Computer Science";

// email variable
let Email = "ahill87105@uat.edu";

// graduation date variable
let gradDate = "January 2027";

let Hobby = "Baking";

// image array to store images in the slideshow
let arrImages = [
    "./images/download (18).jpg",
    "./images/images (1).jpg",
    "./images/images.jpg",
    "./images/download.jpg"
];

// variable to keep track of the current image array index
let currImage = 0;

// show slide - pass in the index of the array to show
function showSlide(index) {
    // get a shortcut to the image element in the HTMML
    let image = document.getElementById("imgSlide");
    // change the img source to the relevant address from the array
    image.src = arrImages[index];
}

// previous button function click event
function prevSlide() {
    // when user clicks previous button, change current image to currImage - 1
    currImage--;

    // if user is at first image and clicks previous, loop array
    if (currImage < 0) {
        currImage = arrImages.length - 1;
    }

    // load new img
    showSlide(currImage)
}

// next button function click event
function nextSlide() {
    currImage++;

    // if user is at last image and clicks next, loop array
    if (currImage >= arrImages.length) {
        currImage = 0;
    }

    // load new img
    showSlide(currImage)
}

function loadData() {
    // assign variables to data
    // name variable to name data
    document.getElementById("divName").textContent = Name;

    // major variable to name data
    document.getElementById("divMajor").textContent = Degree;

    // email variable to email data
    document.getElementById("divEmail").textContent = Email;

    // graduation date variable to graduation data
    document.getElementById("divDate").textContent = gradDate;

    // hobby variable to hobby data
    document.getElementById("divHobby").textContent = Hobby;
}