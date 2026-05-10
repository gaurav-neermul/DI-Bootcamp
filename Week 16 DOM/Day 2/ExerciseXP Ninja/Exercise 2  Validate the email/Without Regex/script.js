function validateEmail(event) {

    event.preventDefault();

    let email = document.getElementById("emailInput").value;

    let atSymbol = email.indexOf("@");

    let dotSymbol = email.lastIndexOf(".");

    if (
        atSymbol > 0 &&
        dotSymbol > atSymbol + 1 &&
        dotSymbol < email.length - 1
    ) {

        alert("Valid Email");

    } else {

        alert("Invalid Email");

    }

}