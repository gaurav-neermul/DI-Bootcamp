let form = document.getElementById("libform")

let nounInput = document.getElementById("noun")
let adjectiveInput = document.getElementById("adjective")
let personInput = document.getElementById("person")
let verbInput = document.getElementById("verb")
let placeInput = document.getElementById("place")

let story = document.getElementById("story")
let shuffleBtn = document.getElementById("shuffleBtn")
let libButton = document.getElementById("lib-button");

let noun;
let adjective;
let person;
let verb;
let place;
let stories = []

libButton.addEventListener("click", function (event) {
    event.preventDefault()

    noun = nounInput.value.trim();
    adjective = adjectiveInput.value.trim();
    person = personInput.value.trim();
    verb = verbInput.value.trim();
    place = placeInput.value.trim();

    if (noun === "" ||
        adjective === "" ||
        person === "" ||
        verb === "" ||
        place === ""
    ) {
        alert("Please fill in all fields")
        return;
    }

    stories = [
        person + " found a " + adjective + " " + noun + " in " + place + " and decided to " + verb + " all night",

        "A " + adjective + " " + noun +
        " suddenly appeared in " + place +
        " and forced " + person + " to " + verb + ".",

        person + " was shocked when the " + noun +
        " became " + adjective +
        " and started to " + verb + " inside " + place + "."
    ]

    var randomIndex = Math.floor(Math.random() * stories.length)
    story.textContent = stories[randomIndex]
})

shuffleBtn.addEventListener("click", function () {
    if (stories.length === 0) {
        alert("Generate a story first.");
        return;
    }
    var randomIndex = Math.floor(Math.random() * stories.length);
    story.textContent = stories[randomIndex];

})