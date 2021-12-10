

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */



function removeTrim(str){
    newStr= ""
    for (let i = 0; i<str.length; i ++){
        if(str[i] != " ")
            newStr += str[i]
        if (srt[i] == " " && str[i-1] == " " && str[i+1] == " "){
            continue
        }
    
    }
}

console.log(removeTrim(str1))

function removeTrim(str){
    newStr =""
    if(str[i-1] != " "){
        newStr += str[i-1]
    }
    if(str[i-1] !=" " != str[i] != " "){
        newStr += str[i-1]
    }
    return newStr
}    



function trim(str) {
  newStr = "";
  for (var i = 0; i < str.length; i++) {
    if ((str[i - 1] != " " && str[i + 1] != " ") || str[i] != " ") {
      newStr += str[i];
    }
  }
  console.log(newStr);
  return newStr;
}


module.exports = { trim };