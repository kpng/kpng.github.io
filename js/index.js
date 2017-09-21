document.write("welcmmmmome");
/* 20-Sep-17 Exercise
//create 5 variables
var student_1 = "kongphui" ;
var student_2 = "anonymous";
var student_3 ;
var student_4 ;
var student_5 ;

var welcome_msg = "Hello " + student_1 + " and " + student_2 + "!";
console.log (welcome_msg);
*/

// 21-Sep-17 Exercises

// 1.   Create a new variable "dog" and assign to it with the value "Puggy"
// 1.1  Use the "var" keyword to create a new variable
// 1.2  Give the new variable the name of "dog". Note: variable names do not have quotes(" or ')
// 1.3  Assign the text "Puggy" to the variable dog with the "=" operator
// 1.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 1 BELOW THIS LINE:

//var dog = "Puggy";

// WRITE YOUR CODE ABOVE THIS LINE
// 2.		Print out the variable "dog"
// 2.1	Use the console.log statement to print 
// 			console.log();
// 2.2	Insert the item that you wish to print out between the brackets
// 			console.log(item);
// WRITE THE CODE FOR STEP 2 BELOW THIS LINE:

//console.log("dog");


// WRITE YOUR CODE ABOVE THIS LINE
// 3.		Print out type of value assigned to the variable "dog"
// 3.1	Create a new variable "dogType" 
// 3.2	Use the keyword "typeof" to find out the value's type and assign it to "dogType"
// 3.3	Print dogType on your console
// WRITE THE CODE FOR STEP 3 BELOW THIS LINE:




// WRITE YOUR CODE ABOVE THIS LINE
// 4.		Create a new variable "goodBoy" and assign to it a value of true
// 4.1  Use the "var" keyword to create a new variable
// 4.2  Give the new variable the name of "goodBoy". Note: variable names do not have quotes(" or ')
// 4.3  Assign the value true to the variable "goodBoy" with the "=" operator
// 4.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 4 BELOW THIS LINE:



// WRITE YOUR CODE ABOVE THIS LINE
// 5.		Print out the variable "goodBoy" and the type of value assigned to it
// 5.1	Create a new variable "goodBoyType" 
// 5.2	Use the keyword "typeof" to find out the value's type and assign it to "goodBoyType"
// 5.3	Print goodBoy and goodBoyType on your console
// WRITE THE CODE FOR STEP 5 BELOW THIS LINE:





// WRITE YOUR CODE ABOVE THIS LINE
// 6.		Create a new variable "treats" and assign to it a value of 5
// 6.1  Use the "var" keyword to create a new variable
// 6.2  Give the new variable the name of "treats". Note: variable names do not have quotes(" or ')
// 6.3  Assign the value 5 to the variable "treats" with the "=" operator
// 6.4  Close the statement with ";"
// WRITE THE CODE FOR STEP 6 BELOW THIS LINE:



// WRITE YOUR CODE ABOVE THIS LINE
// 7.		Print out the variable treats and the type of value assigned to it
// 7.1	Create a new variable "treatsType" 
// 7.2	Use the keyword "typeof" to find out the value's type and assign it to treatsType
// 7.3	Print treats and treatsType on your console
// WRITE THE CODE FOR STEP 5 BELOW THIS LINE:





// WRITE YOUR CODE ABOVE THIS LINE

/*
function concat(string1, string2){
    var concatString = string1 + " " + string2;

    if (string1=="Bala" & string2=="Ken") {
        concatString = string1 + " " + string1 + " | " + string2 + " " + string2;
    }

    return concatString;
}


console.log(concat("abc","kpng"));
console.log(concat("Bala","Ken"));
document.writeln("Writeln trying");
*/

// 1.0  Given the following variables
function FindLessonType(days, fullTime) {
    //var days = 5;
    //var fullTime = false;
    // 1.1  Write an if statement to determine if lesson is full time.
    //      Part time lesson consists of 8 days.
    var LessonType;
    if (fullTime == false) {
        if (days == 8) {
            LessonType = "Part time lesson";
        }
    } else {
        LessonType = "Full time lesson";
    }

    return LessonType;
}
console.log(FindLessonType(5,false));
document.writeln();

// 1.2  To create an if statement, write:
//      if(days < 8){ ...code to fill...  }
// 1.3  To changee fullTime to true, in the if statement within the { curly braces } write:
//      fullTime = true;
// 1.4  Print the value of fullTime in the console by writing after 1.2:
//      console.log(fullTime);
// WRITE THE CODE FOR STEP 1 BELOW THIS LINE:






// WRITE YOUR CODE ABOVE THIS LINE
// 2.0  Given the following variables
var favDrink = "Red Wine";
var order = "Whiskey"
var rightChoice;
// 2.1  Write a function to determine whether Whiskey is your favourite drink
// 2.2  If the order is "Red Wine", it will be the right choice. To create an if statement, write:
//      if(order == "Red Wine") { ...code to fill... }
// 2.3  To change rightChoice to true, in the if statement within the { curly braces } write:
//      rightChoice = true; 
// WRITE THE CODE FOR STEP 2.1 to 2.3 BELOW THIS LINE:

function determineFavDrink(order){
var rightChoice=false;

if(order=="Red Wine") rightChoice=true;
return rightChoice;
}



// WRITE YOUR CODE ABOVE THIS LINE
// 2.4  If the order is anything else, it will NOT be the right choice. To add an else statement,           write:
//      else { ...code to fill... }
// WRITE THE CODE FOR STEP 2.4 BELOW THIS LINE:





// WRITE YOUR CODE ABOVE THIS LINE
// 2.5  Print out rightChoice
// WRITE THE CODE FOR STEP 2.5 BELOW THIS LINE:



// WRITE YOUR CODE ABOVE THIS LINE
// 3.0  Given the following variables
var happyHour = "7pm";
var happyHour2 = "8pm";
var timeNow = "5pm";
var cheapDrinks;
// 3.1  Write a function to determine whether 5pm is happy hour
// 3.2  If timeNow is 7pm, it is happy hour. To create an if statement, write:
//      if(timeNow... ) { ...code to fill... }
// 3.3  To change cheapDrinks to true, in the if statement within the { curly braces } write:
//      rightChoice = true;     
// WRITE THE CODE FOR STEP 3.1 to 3.3 BELOW THIS LINE:





// WRITE YOUR CODE ABOVE THIS LINE
// 3.4  If timeNow is 8pm, it is also happy hour. To create an else if statement, write:
//      else if(timeNow...) { ...code to fill... }
// 3.5  To change cheapDrinks to true, in the else if statement within the { curly braces } write:
//      cheapDrinks = true;   
// WRITE THE CODE FOR STEP 3.4 to 3.5 BELOW THIS LINE:





// WRITE YOUR CODE ABOVE THIS LINE
// 3.6  If time now is anything else, it will NOT be happy hour. To add an else statement,                   write:
//      else { ...code to fill... }
// WRITE THE CODE FOR STEP 3.6 BELOW THIS LINE:





// WRITE YOUR CODE ABOVE THIS LINE
// 3.7  Print out cheapDrinks
// WRITE THE CODE FOR STEP 3.7 BELOW THIS LINE:



// WRITE YOUR CODE ABOVE THIS LINE