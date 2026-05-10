//with regex

function validateEmail(event) {
    event.preventDefault()

    let email = document.getElementById("emailInput").value

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailPattern.test(email)) {
        alert("Valid Email")
    } else {
        alert("Invalid Email")
    }
}