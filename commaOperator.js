//  Comma Operator
//  a,b => a = left, b = right but answer given also right side...

let num = (10, 10+10);
console.log(num);


let a = 10;
let b = (a++, a+1);
console.log(a,b);

// other method

let a1 = 10;
a1++;
console.log(a1, a1+1);


