// Program Caesar Cipher

function caesarCipher(offset, input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        let shiftedCharCode = charCode + offset;
        if (shiftedCharCode > 122) {
            shiftedCharCode -= 26;
        }
        let shiftedChar = String.fromCharCode(shiftedCharCode);
        result += shiftedChar;
    }
    return result;
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza