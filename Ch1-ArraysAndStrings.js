// 1.1 Implement an algorithm to determine if a string has all unique characters.
function uniqueChars(str) {
    str = str.split('');
    hash = {};
    for (var i = 0; i < str.length; i++) {
        if (letterhash[str[i]]) {
            return false;
        } else {
            letterHash[str[i]] = true;
        }
    }
    return true;
}

console.log(uniqueChars('abcdefg'));

// What if you cannot use additional data structures?
function uniqueChars(str) {
    str = str.split('').sort(function(a, b){return a < b});
    
    for (var i = 0; i< str.length - 1; i++) {
        if (str[i] === str[i+1]){
            return false;
        }
    }
    return true;
}

