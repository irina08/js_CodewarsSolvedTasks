function testit(s){
    return s.replace(/.\b/g, char => char.toUpperCase());
}

function makeUpperCase(str) {
    let s = '';
    for(let i = 0; i < str.length; i++) {
        s += str[i].toUpperCase();
    }
    return s;
}

function capitalizeWord(word) {
    let char = word[0].toUpperCase();
    return word.replace(word[0], char);
}