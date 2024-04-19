function letters(str = string) {
    // cria uma lista para armazenar as letras que faltam
    const list = []

    for (let i = 0; i < str.length; i++) {
        /**
         * pega o índice da letra equivalente a sua posição na string
         * a função "charCodeAt", através de um número, busca o ASCII(number)
         * da posição respectiva em sua string.
         */
        const letter = str.charCodeAt(i);


        /** 
         * pega o índice do loop 
         * Ao buscar o ASCII do índice "0", pegamos o primeiro elemento da string.
         * Somando com o valor do índice, teríamos o valor que viria a seguir de acordo com o loop.
         * 
         * Ex:
         * - Letter: 101
         * - Previus: 100
         * 
         * Estaria faltando: 100, propriamente.
         */ 
        let previousLetter = str.charCodeAt(0) + i;

        /**
         * Compara se o índice da letra é maior que do loop.
         * Se "letter" é o ASCII da letra atual, e "previusLetter" é pra ser a que viria a seguir
         * -, se houver diferença entre ambas, isso significa que foram puladas letras do alfabeto.
         */
        if (letter > previousLetter) {
            while (letter > previousLetter) {
                list.push(String.fromCharCode(previousLetter))
                previousLetter += 1
            }
        }
    }

    return list
}

console.log(letters("abcz"))