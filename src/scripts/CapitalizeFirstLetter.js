// Returns the given string but with the first letter capitalized
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
export default capitalizeFirstLetter;