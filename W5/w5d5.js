function createPhoneNumbers(numbers){
    str = "("
    for(let x = 0; x <numbers.length; x++){
        if (x<3){
            str += numbers[x];
        }
        else if (x == 3){
            str += ") " + numbers[x];
        }
        else if (x < 6){
            str += numbers[x];
        }
        else if (x == 6){
            str += "-" + numbers[x]
        }
        else
            str += numbers[x]
    }
    return str
}

numbers1 = [1,2,3,4,5,6,7,8,9,0]

console.log(createPhoneNumbers(numbers1))