function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        document.getElementById("location").innerText = "Geolocation is not supported by this browser"
    }
}

function showPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    document.getElementById("location").innerHTML = 
        "Latitude: " + latitude + 
        "<br>Longitude: " + longitude
}