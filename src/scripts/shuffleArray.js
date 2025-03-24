/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    const shuffledArray = array;
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }
    return shuffledArray;
}
export default shuffleArray;