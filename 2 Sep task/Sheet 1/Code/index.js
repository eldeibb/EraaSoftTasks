//problem 1 function
function stringReverse(s){
    let arr = s.split("")
    let revArr = arr.reverse()
    let reversedStr = revArr.join("")
    return reversedStr
}

//problem 2 function
function equalStr(s1, s2){
    return s1.toLowerCase() === s2.toLowerCase();
}

//problem 3 function
function checkUpperCase(s){
    let upperS=s.toUpperCase()
    return s==upperS
}

//problem 4 function
function partOfString(s, start, end){
    let newS = s.substr(start, end)
    return newS
}

//problem 5 function
function joinStrings(s1, s2, s3){
    let joinedStr = s1.concat(" ", s2, " ",s3)
    return joinedStr
}

//problem 6 function
function checkPalindrome(s){
    let arr = s.split("")
    let revArr = arr.reverse()
    let revS = revArr.join("")
    return revS == s
}

//problem 7 function
function removeWhiteSpace(s){
    let newS = s.trim()
    return newS
}

//problem 8 function
function checkDomain(s){
    if(s.startsWith("ww.") && s.endsWith(".eraa")){
        return true
    }
    return false
}

//problem 9 function
function removeLetter(s){
    let newS = s.replace('o','')
    let finalS = newS.replace('O','')
    return finalS
}

//problem 10 function
function isSubStr(s1, s2, s3){
    
    return s1.includes(s2) && s1.includes(s3)
}

////////////////////////////////////////////////////////////////////////////////

// problem 1 call
// console.log(stringReverse("ahmed"))

// problem 2 call
// console.log(equalStr("Mohamed", "Moamen"))

// problem 3 call
// console.log(checkUpperCase("AHMEd"))

// problem 4 call
// console.log(partOfString("Moamen", 1, 4))

// problem 5 call
// console.log(joinStrings("ahmed", "hesham", "moustafa"))

// problem 6 call
// console.log(checkPalindrome("ahmed"))

// problem 7 call
// console.log(removeWhiteSpace("       ahmed       "))

// problem 8 call
// console.log(checkDomain("w3w.sherif.err"))

// problem 9 call
// console.log(removeLetter("Eraoa"))

// problem 10 call
// console.log(isSubStr("SoWhatYesOhh", "So", "Ohh"))
