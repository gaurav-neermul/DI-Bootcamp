const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//insted of the following:
// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
//we will use forEach 
colors.forEach((color,index) => { //forEach((param1, param2))
    console.log(`${index + 1}# choice is ${color}`) //index + 1 beacuse choice can't be 0 
});
//some check if there's atleast 1
const hasViolet = colors.some(color => color === "Violet")
console.log(hasViolet ? "yeah" : "Noooooo...")