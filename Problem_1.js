// Program Play With Asterisk

function playWithAsterik(n) {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i; j++) output += " ";
        for (let k = 0; k <= i; k++) output += "* ";
        console.log(output);
    }
}

playWithAsterik(5);