function first_non_repeating_letter(str) {
    for (var l in str) {
        if(str.match(new RegExp(str[l],"ig")).length === 1) {
            return str[l];
        }
    }
    return '';
}

let str1 = 'stress',
    str2 = 'Anna',
    str3 = 'sTress';
console.log(first_non_repeating_letter(str1));
console.log(first_non_repeating_letter(str2));
console.log(first_non_repeating_letter(str3));