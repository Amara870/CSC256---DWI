// create an empty list to hold the user inputted movies
let arrMovies = [];

// this function will take input from the user and add it to the list
function addMovie() {
    // shorcut for the txt input
    let txtMovie = document.getElementById("txtMovie");

    // get movie name and remove and leading or trailing spaces
    let movieName = txtMovie.value.trim();

    // check to see if movie name is empty
    if (movieName != "") {
        // add movie name if value isn't empty
        arrMovies.push(movieName);

        // reset movie value input variable
        txtMovie.value = "";

        // display movies
        showMovies();
    }
}

// function to show the movie in the list
function showMovies() {
    // shorcut for the movied div
    let divMovies = document.getElementById("divMovies");

    // sort the list of movies to make sure we have a sorted list
    arrMovies.sort();

    // convert array into string and seperate with an HTML break
    divMovies.innerHTML = arrMovies.join("<BR>");
}

function resetMovieList() {
    // reset the array to be empty
    arrMovies = [];

    // reload the movie div
    showMovies();
}
