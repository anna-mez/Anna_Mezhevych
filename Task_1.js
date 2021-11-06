function filter_list(list) {
    return list.filter(value => typeof value === 'number');
}

let list1 = [1,2,'a','b'],
    list2 = [1,'a','b',0,15],
    list3 = [1,2,'assf','133',133,'3'];
console.log(list1," == ", filter_list(list1));
console.log(list2, " == ", filter_list(list2));
console.log(list3, " == ", filter_list(list3));