//Objects are javascript  non-primitive data-type used to store multiple values with different datatypes.

var user = {
    name: "karim",
    email: "karim@gmail.com",
    phone: 34338388838,
}

//Accessing values of Object with Dot Notation
console.log(user)
console.log(user.email)

// An alternative approch to declare Object is to create an empty object and then use dot notation to assign variables to the object

var student = {};
student.name = "Arina karim",
student.age = 17,
student.class = "10th",
student.school = "Innova Academy"

console.log(student)
console.log(student.school)


//Object literals and Bracket Notation
const rentHouse = {}
rentHouse['rooms'] = 5,
rentHouse['color'] = 'blue',
rentHouse['pricePKR'] = 20000

console.log(rentHouse);

//Rocket object
const arryOfRocket = ['speed', 'altitude', 'imageQuality']
let Rocket = {
    speed: '689000km/h',
    altitude: '30m',
    imageQuality: 'Hight Quality images'
}
for(var i = 0; i <arryOfRocket.length; i++){
    console.log(Rocket[arryOfRocket[i]])
}


//--------------------------ARRAYS ARE OBJECTS IN JAVASCRIPT--------------------------------------

//In javascript arrays are objects as arrys have build-in methods such as push() which is used to add items to an array.
var fruits = []

fruits.push('Apple');
fruits.push('Orange');
fruits.push('Water Mellon');
fruits.push('Banana');
fruits.push('Mango');
fruits.push('Graps');
console.log(fruits)

//pop() to remove items form an array
fruits.pop('Graps')
console.log(fruits)