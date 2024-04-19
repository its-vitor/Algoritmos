function translatePigLatin(str) {
    /**
     * Regex que verifica se a primeira letra que aparece é uma consoante.
     */
    let vowelsRegex = /^[^aeiou]+/;
    const consoant = str.match(vowelsRegex);
    
    return consoant !== null ? str
        .replace(vowelsRegex, "")
        .concat(consoant)
        .concat("ay")
        : str.concat("way")

}

console.log(translatePigLatin("california"));