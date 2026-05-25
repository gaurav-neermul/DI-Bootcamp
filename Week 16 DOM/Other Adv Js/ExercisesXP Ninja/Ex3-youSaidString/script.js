function search_word(str, word) {

    let words = str.split(" ");

    let count = 0;

    words.forEach(item => {

        if(item === word) {

            count++;

        }

    });

    return `'${word}' was found ${count} times.`;

}

console.log(search_word('The quick brown fox', 'fox'));