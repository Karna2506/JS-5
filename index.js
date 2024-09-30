                               // Task-1

var hello = {
    "str1" : "Hello",
    "str2" : "World"
}
console.log(hello.str1 + hello.str2);
console.log(`"${hello.str1}${hello.str2}"`)

                               // Task-2

var  name = 'John', age = 20, grade = 'A' ;

console.log(`
Name : ${name}
Age : ${age}
Grade : ${grade}`)

                              // Task-3

var task = {
      
    'string ': 'banana',
    'char' : 'a'
}
console.log(`The Character "${task.char}"appears 3 time in "${task["string "]}"`)

                           
                               // Task-4


var car = {
    'make' : 'Toyato',
    'model' : 'Corolla',
    'year' : 2020,
    'color' : 'Blue'
}
console.log(`
Make : ${car.make}
Model : ${car.model}
Year : ${car.year}
Color : ${car.color} `)

                              // Task-5


var alpha ={
    'abc' : ['a', 'b', 'c', 'd', 'e', 'f']
}
var length = alpha["abc"].length;
for(var i = length-1 ; i >= 0; i--){
    console.log(alpha["abc"][i])
}