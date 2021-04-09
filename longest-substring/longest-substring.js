let mystring1 = "acabbca"
let mystring2 = "asdkfjnasdkljvnasldj"
let mystring3 = "abcdefghijklmnopqrstuvwxyz"

function longestSubstring(string) {

    let longest = 1
    let substring = string[0]

    for (let i = 1; i < string.length; i++) { // loop through string
        if (substring.indexOf(string[i]) === -1) { // if character is not found in substring
            substring += string[i] // add character to substring
            if (substring.length > longest) { // if substring length is greater
                longest = substring.length // update variable
                // console.log(substring, longest) // just to see the process in the console
            }
        } else { substring = string[i] } // if character is found in substring, reset substring to the character to start the next attempt
    }

    return longest
}

module.exports = longestSubstring
