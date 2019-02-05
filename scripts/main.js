// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const bill = {
    officeName: "Sherman Dentistry",
    streetAddress: "42 Wallaby Way, Sydney",
    doctorName: "P. Sherman",
    patientName: "Darla Sherman",
    visitDate: "01-15-2005",
    amountBilled: 235.18,
    dueDate: "04-15-2005"
}

// Lightning Exercise 2: Use square bracket notation to output the value of those three properties to the console in Chrome.

console.log(`${bill[patient]} owes $${bill[owed]} for the visit on ${bill[dateVisited]}`);


// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

for (value of Object.values(bill)) {
    console.log(value);
}


// Lightning Exercise 4: Output all of the key names from your doctor's office bill to the console in Chrome.

for (key of Object.keys(bill)) {
    console.log(key);
}


// Lightning Exercise 5: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

const mainSection = document.querySelector("#mainSection");

for (key of Object.keys(bill)) {
    mainSection.innerHTML += `<span>${key}</span><br>`;
}


// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const tacos = {
    name: "tacos",
    filling: "carnitas",
    base: "soft corn tortilla",
    toppings: ["onion", "cilantro", "lime", "nopales", "salsa verde", "avocado"],
    servingSize: 3,
    ethnicity: "Mexican",
    vegetarian: false
}


// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const foodHolder = document.querySelector(".food");

for (entry of Object.entries(tacos)) {
    foodHolder.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
}