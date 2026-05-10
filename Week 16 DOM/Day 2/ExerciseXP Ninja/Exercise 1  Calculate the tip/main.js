function calculateTip() {
    let billAmount = document.getElementById("billamt").value
    let serviceQuality = document.getElementById("serviceQual").value
    let numberOfPeople = document.getElementById("peopleamt").value

    if (serviceQuality == 0 || billAmount === "") {
        alert("Please fill all the fields");
        return;
    }

    if (numberOfPeople === "" || numberOfPeople <=1 ) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none"
    }


    let total = ( billAmount * serviceQuality) / numberOfPeople
    total = total.toFixed(2)


    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerText = total


}