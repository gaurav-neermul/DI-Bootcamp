const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {

    let position = index + 1;

    let suffix =
        position === 1 ? ordinal[1] :
        position === 2 ? ordinal[2] :
        position === 3 ? ordinal[3] :
        ordinal[0];

    console.log(`${position}${suffix} choice is ${color}.`);
});


//without ternary
// let suffix;

// if(position === 1) {
//     suffix = ordinal[1];
// }
// else if(position === 2) {
//     suffix = ordinal[2];
// }
// else if(position === 3) {
//     suffix = ordinal[3];
// }
// else {
//     suffix = ordinal[0];
// }