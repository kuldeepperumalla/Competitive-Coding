'use strict'
// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance: ucFirst("john") == "John";
[1];
const usFirst = function(name){
    return name ?? "only string please";
    return name[0].toUpperCase()+name.slice(1)
}
console.log(usFirst("null"));