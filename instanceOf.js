// Instance of Operator decleration...

function Instance(name, age){
    this.name = name;
    this.age = age;
}

let all = new Instance('Abhishek', 23);
console.log(all.name); // Abhishek
console.log(all.age); // 23

console.log(all instanceof Instance); // true