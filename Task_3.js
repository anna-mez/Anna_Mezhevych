function digital_root(n) {
    return n % 9 || 9;
}

let n1 = 16,
    n2 = 942,
    n3 = 493193,
    n4 = 132189;
console.log(n1, "--->",digital_root(n1));
console.log(n2, "--->",digital_root(n2));
console.log(n3, "--->",digital_root(n3));
console.log(n4, "--->",digital_root(n4));
