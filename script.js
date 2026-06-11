// name variable
let Name = "Amara Hill";

// degree variable
let Degree = "Advancing Computer Science";

// email variable
let Email = "ahill87105@uat.edu";

// graduation date variable
let gradDate = "January 2027";

let Hobby = "Baking";

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
