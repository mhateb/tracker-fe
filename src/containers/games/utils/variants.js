export default function* generatorOfVariants(words) {
    for (let i=0; i < words.length - 1; i++) {
        const indexesOfWords = getWordsIndexes(words.length - 1, i)
        const indexesOfVariants = getRandomIndexesForVariants()
        const variants = new Array(4)

        indexesOfVariants.forEach((indexOfVariant, index) => {
            variants[indexOfVariant] = { word: words[indexesOfWords[index]].translate, isTrueAnswer: index === 0 }
        })

        yield {word: words[i].original, variants}
    }
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getRandomIndexesForVariants() {
    const set = new Set()

    while (set.size < 4) {
        set.add(randomInteger(3))
    }

    return Array.from(set)
}

function getWordsIndexes(max, index) {
    const set = new Set()
    set.add(index)

    while (set.size < 4) {
        set.add(randomInteger(max))
    }

    return Array.from(set)
}
