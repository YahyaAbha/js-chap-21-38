// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName + lastName;
// let greet = "Assalamuaalaikum";
// if(!firstName || !lastName){
//     console.log("Invalid input");
// } else {
//     console.log(greet,fullName);
// }


// let user = " Samsung Galaxy S6 Edge Plus";
// let i  = user.length;
// console.log("My favorite phone is:",user,"Length of string:",i);



// let index = "Pakistani";
// let find = index.indexOf("n");
// console.log(find);


// let word = "Hello World";
// let find = word.lastIndexOf("l");
// console.log("String:",word);
// console.log("Last index of 'l':",find);


// let word = "Pakistani";
// let index = 3;
// let newFind = word[index];
// let find = word.indexOf(word[index]);
// console.log("String:",word);
// console.log("Character at index 3:",newFind);


// let user1 = prompt("Enter first name");
// let user2 = prompt("Enter last name");
// let user3 = user1 +" "+ user2;

// if(!user1 || !user2){
//     console.log("Invalid input");
// } else {
//     console.log("Hello",user3);
// }

// var text = "World War II"
// var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
//      text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//      console.log(firstChar);
// }

// let text = "Hyderabad";
// var newText = text.replace("Hyderabad", "Islamabad");
// console.log(newText);

// var change = "“Ali and Sami are best friends. They play cricket and football together.”";
// var newStr = change.replace(/and/g, "&");
// console.log(newStr);


// var str = "472";
// console.log("Value:",str);
// console.log("Type:",typeof str);
// var newStr = parseInt(str);
// console.log("Value:",newStr);
// console.log("Type:",typeof newStr);


// var user = prompt();
// var cap = user.toUpperCase();
// console.log(cap);


// var name = prompt("Enter the name");
// var char = name.charAt(0);
// var first = char.toUpperCase();
// var newStr = name.slice(1);
// var cap =  first + newStr;
// console.log(cap);


// var num = 35.36;
// var str = num.toString();
// var  parts = str.replace(".","");
// console.log(parts);





function validateUsername() {
    // Get the input value from the user
    var username = document.getElementById("username").value;

    // Define a regex pattern that matches any of the special characters [@, !, ., ,]
    var invalidChars = /[@!.,]/;

    // Check if the username contains any of the invalid characters
    if (invalidChars.test(username)) {
        // If true, show an alert to prompt user for valid username
        alert("Please enter a valid username. Special characters @, !, ., , are not allowed.");
    } else {
        // If no invalid characters, show success message or proceed further
        alert("Username is valid!");
    }
}
 
    







