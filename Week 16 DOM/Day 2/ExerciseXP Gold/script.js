// Instructions
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>


// Display the value of the selected option.

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

// The newly added option should be selected by default.

let genres = document.getElementById("genres")
console.log(genres.value)


let newOption = document.createElement("option")
newOption.value = "classic"
newOption.textContent = "Classic"
genres.appendChild(newOption)

genres.value = "classic"