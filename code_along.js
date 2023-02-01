const greetingMachine = (name, greeting) => {
    if(typeof name != "string") {
        return "You must use a name as an argument!";
    } else if (typeof greeting(name) != "string") {
        return "You must use a greeting function as the second argument";
    }
    return greeting(name);
}

const hi = (name) => `Hi, ${name}`;

const yo = (name) => `Yo, ${name}, what's up?`;

const bostonGreeting = (name) => `hey ${name} Fuck You!`;

console.log(greetingMachine('Tobin', hi));
console.log(greetingMachine('Bobby', yo));
console.log(greetingMachine('Billy', bostonGreeting));

let greet = greetingMachine('Tobin', hi);
console.log(typeof greet);
console.log(greet);
//for this case calling greetingMachine returns a string


const multiplyTwo = num => {
    return num * 2;
}

console.log(greetingMachine('Tobin',multiplyTwo)); //would log NaN
console.log(greetingMachine(25,multiplyTwo)); //would log 50
//we have not specified what types of data the function can take, therfor
//different data and functions can be passed through

console.log('=======================');

let people = {
    titles: ["Mr.","Mrs.","Dr.","Professor","President","Supreme Leader"],
    firstNames: ["Lukas","Cameron","Parker","Kyle","Damien","Andrew"],
    lastNames: ["Nesittka","Grieder","Sheehan","Borcik","Redd","Lohman"]
}

//objects can hold any data type
let greetings = {
    hi: (title, firstName, lastName) => `Hi, ${title} ${firstName} ${lastName}`,
    yo: (title, firstName, lastName) => `Yo, ${title} ${firstName} ${lastName}, what's up?`,
    bostonGreeting: (title, firstName, lastName) => `Hey ${title} ${firstName} ${lastName}, Fuck You!`
}
//a function stored inside an object can be called using . or bracket notation
// console.log(greetings.hi('Tobin'));
// console.log(greetings.yo('Tobin'));
// console.log(greetings.nice('Tobin'));

const getRandom = array => {
    let randInt = Math.floor(Math.random() * array.length);
    return array[randInt];
}

const getRandomKey = object => {
    let count = 0;
    for (let key in object) {
        count++;
    }
    let randInt = Math.ceil(Math.random() * count);
    let currKey = 1;
    for (let key in object) {
        if(currKey === randInt){
            return object[key];
        }
        currKey++
    }
}
//one line version of above function
//const getRandom - arr => arr[Math.floor(Math.random() * array.length)]

const greetingMachineTwo = (personObj, functionObj) => {
    const {titles, firstNames, lastNames} = personObj;
    let title = getRandom(titles);
    let firstName = getRandom(firstNames);
    let lastName = getRandom(lastNames);

    let greeting = getRandomKey(functionObj);

    return greeting(title,firstName,lastName);
}
for(let i = 0; i < 10; i++) {
console.log(greetingMachineTwo(people,greetings))
}