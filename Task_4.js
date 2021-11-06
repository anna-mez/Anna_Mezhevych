function count_number_of_pairs(arr, target) {
    let number  = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j ++)
            if (arr[i] + arr[j] == target)
                number++;
    return number;
}

let arr1 = [1,3,6,2,2,0,4,5],
    target1 = 5;
console.log("The number of pairs in", arr1, ", the sum of which gives", target1, "is", count_number_of_pairs(arr1,target1));
