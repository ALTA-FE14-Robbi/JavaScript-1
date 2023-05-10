// Program Ubah Huruf

function ubahHuruf(sentence) {
  const normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shiftedAlphabet = "KLMNOPQRSTUVWXYZABCDEFGHIJ";

  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    let n = sentence[i];
    if (/[a-zA-Z]/.test(n)) {
      let index = normalAlphabet.indexOf(n.toUpperCase());
      n = shiftedAlphabet[index];
    }
    result += n;
  }
  return result;
}


console.log(ubahHuruf("SEPULSA OKE"))     // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")) // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA"))       // SXNYXOCSK
console.log(ubahHuruf("GOLANG"))          // QYVKXQ
console.log(ubahHuruf("PROGRAMMER"))      // ZBYQBKWWOB
