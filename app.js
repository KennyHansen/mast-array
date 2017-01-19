//Write a function called cubed(x) that accepts an argument x and returns its cubed value
function cubed(x) {
    return x * x
}
console.log(cubed(4))

//write a function called power that accepts two args (base, exp) and returns the power  
function power(base, exp) {
    var numPower = 1
    for (var i = 0; i < exp; i++) {
        numPower *= base
    }
    return numPower
}
console.log(power(2,12))

/*
* write a function called logArr that will log each item in an array
*/
function logArr() {
    var args = arguments
    var logArray = []
    for (var i = 0; i < args.length; i++) {
        logArray.push(args[i]);
    }
    return logArray
}
console.log('lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','lol','loool','lol','lol','lol','lol','lol')

/**
    Fill in the necessary parts of the findById function below
*/
var users = [{id: 1, name: 'Jon'},{id: 2, name: 'Yuli'},{id: 21, name: 'Peter'},{id: 17, name: 'St. MaryLou de la playa carmen'},{id: 51, name: 'Doug'},{id: 881, name: 'Paul'},{id: 0, name: 'Jon'},{id: 999, name: 'Timma'}]

function findById(id){
    for (var i = 0; i < users.length; i++) {
        var user = users[i] 
        if (user.id == id) {
            return user
        }
    }
    users[id] = {error:'Sorry that user id could not be found'}
    return users[id]
}
console.log(findById(17)) //Should return {id: 17, name: 'St. MaryLou de la playa carmen'}
console.log(findById(1000)) //Should return 4 {error: 'Sorry that user id could not be found'} ****Upshift Challenge

//Write a function that accepts a name argument and will loop over theBand and return the band member's name and the instrument that he/she plays
//use string concat to return the sentence below 
// [band-members-name] is in the band and plays the [band-members-instrument];

var theBand = {
    members: [{
        name: 'Johnny P',
        instrument: 'Sax'
    },{
        name: 'River',
        instrument: 'Drums'
    },{
        name: 'Kris',
        instrument: 'Guitar'
    }]
}
 
//write a fn that accepts two arguments a (sentence, letter) have the function return the number of times that letter repeats in the sentence
function findRepeatedLetter(sentence, letter) {
    var numLetters = 0
    for (var i = 0; i < sentence.length; i++) {
        var currentLetter = sentence.charAt(i);
        if (currentLetter == letter) {
            numLetters++
        }
    }
    return numLetters
}
console.log(findRepeatedLetter('This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition.','v'))

//write a fn called pythagorean(a,b) have it return the value of c^2
function pythagorean(a,b) {
    return Math.sqrt((power(a,2) + power(b,2)))
}
console.log(pythagorean(5,12))

/**
    Best Practice: Constructor functions are the only variables that start with an uppercase letter
    The keyword this refers to a single instance
    When calling or invoking a constructor function you must use the *** new *** keyword
*/

//Write a CellPhone constructor function that accepts the following arguments (string: brand, number: screenSize, string: carrier)
function CellPhone(brand, screenSize, carrier) {
    this.brand = brand;
    this.screenSize = screenSize;
    this.carrier = carrier;
}

//Write a function called sumAll that accepts an array of numbers and returns the sum of all items in the array
function sumAll() {
    var args = arguments
    var sum = 0
    for (var i = 0; i < args.length; i++) {
        var newNum = args[i];
        sum += newNum
    }
    return sum
}
console.log(sumAll(2,3,4,5,6,7,8,9,10))

//write an isEqual function that accepts two arguments and returns a boolean (3,'3') returns false ('abc', 'abc') returns true
function isEqual(arg1, arg2) {
    if (arg1 === arg2) return true; else return false;
}

console.log(isEqual(2, 2))
console.log(isEqual(2, 3))
console.log(isEqual(2, '2'))
console.log(isEqual('q', 'q'))

var thing = 2
console.log(isEqual(2, thing))

//write a function called inStock that accepts a productId or productName and returns the product if it is in stock based on its quantity
var products =[{
    id: 123,
    name: 'Squaty Potty', 
    url: 'https://www.youtube.com/watch?v=YbYWhdLO43Q',
    quantity: 5,
    price: 19.99
},{
    id: 124,
    name: 'Design Your Own Cage', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/e93da6b3583ea782f5b3814305c16960.jpeg',
    quantity: 0,
    price: 1.99
},{
    id: 125,
    name: 'Worlds Best Chap Stick', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/dde306374cd35acff10f52eb4c586b5d.jpeg',
    quantity: 280,
    price: 0.99
}]

function inStock(productInfo) {
   for (var i = 0; i < products.length; i++) {
       var product = products[i];
       for (var key in product) {
           if (product[key] == productInfo) {
               if (product.quantity > 0) return product; else return 'Out of Stock';
           }
       }
   }
   return('Product not found')
}
console.log(inStock('Squaty Potty'))
console.log(inStock(123))
console.log(inStock(124))
console.log(inStock(123123123))