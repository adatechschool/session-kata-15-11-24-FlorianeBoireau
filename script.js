const alphabet = ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]


function getLatinCharacterList() {
    let texte = " "
    for(let i = 0; i <= 11; i++) {
        texte += alphabet[i] 
    }
    return texte 
}

getLatinCharacterList()
console.log(getLatinCharacterList())