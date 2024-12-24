function firstLastName (firstName, lastName) {
    let fullName = [];
    for(i = 0; i < firstName.lenght; i++){
        fullName.push(`${i + 1}. ${firstName[1]} ${lastName[i]}`);
    }
    return fullName;
}
let first = ["Filip","Nikola"];
let last = ["Pavlov", "Unevski"];
let full = firstLastName(first,last);
console.log(full);