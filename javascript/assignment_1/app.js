// alert("Hello JS")

// ------------------------ Chapter 1 ----------------------------

// Q1:
// alert("Welcome to my website")

// Q2
// alert("ERROR!\nPlease enter a valid email.")

// Q3
// alert("Welcome to JS Lang\nHappy Coding.")

// Q4
// alert("Welcome to JS Land")
// alert("Happy Coding")


// Q5: paste it on browser console
// alert("Hello.. I can run JS on the web browser console")

// ------------------------ Chapter 2 ----------------------------

// Q1:
// var username;

// Q2:
// var myName = "Muhammad Bilal"

// Q3
// var message = "Hello World"
// alert(message)

// Q4:
// var stdName = "Bilal"
// var age = 21
// var degree = "Mobile App Development"

// alert(stdName)
// alert("I am " + age + " years" )
// alert("Certified "+ degree)

// Q5:
// alert("Pizza\nPizz\nPiz\nPi\nP\n")

// Q6:
// var email = "example@gmail.com"
// alert("My email address is "+ email)

// Q7:
// var book = "A Smarter Way To Learn Javascript"
// alert("I am trying to learn from the book "+ book)

// Q8:
// document.write("YAY! I can write Html using Javascript")

// Q9:
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(pattern)

// ------------------------ Chapter 3 ----------------------------

// Q1:
// var age = 21
// alert("I am "+ age +" years old")

// Q2:
// var visit = 14;
// alert("You have visits "+ visit + " times")

// Q3:
// var birthyear = 2002
// document.write("My Birth Year is "+ birthyear )
// document.write("<br />")
// document.write(  "Data Type of my birth year is "+ typeof birthyear)

// Q4:
// var visitorName = "Bilal"
// var product = "Pakola"
// var quantity = 12
// var store = "XYZ Online Store"

// document.write( "<h4>" + visitorName + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "</h4>")


// ------------------------ Chapter 4 ----------------------------

// Q1:
// var name1,name2,name3;
// console.log(name1,name2,name3); // undefined undefined undefined


// Q2:
/**
 * 5 Legal
 *
 * 1. myName
 * 2. $studentId
 * 3. _privateKey
 * 4. schoolName
 * 5. subject1
 */

/**
 * 5 Illegal
 *
 * 1. 1stName
 * 2. class -> js keyword
 * 3. @email -> symbol not allowed
 * 4. my@123
 * 5. 453
 */


// Q3:
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("<ol>" +
//     "<li>"+ "Variable names can only contain letters, numbers ,underscore and dollar sign. " + "<b>For example $my_1stVariable</b> "  + "</li>" +
//     "<li>"+ "Variables must begin with a letter, dollar sign ($) or underscore ( _ )."+ " <b>For example $name, _name or name  </b>" +"</li>" +
//     "<li>"+ "Variable names are case sensitive" +"</li>"  +
//     "<li>"+ "Variable names should not be JS Keyword" +"</li>"
//     + "</ol>")

// ------------------------ Chapter 5 ----------------------------

// Q1:
// var num1 = 3
// var num2 = 5
// var add = num1 + num2
// document.write("Sum of " + num1 + " and " + num2 + " is " + add)

// Q2:
// var num1 = 3
// var num2 = 5

// var add = num1 + num2
// var subtract = num1 - num2
// var multiplay = num1 * num2
// var divide = num1 / num2
// var modulus = num1 % num2

// document.write("Sum of " + num1 + " and " + num2 + " is " + add)
// document.write("<br/>")
// document.write("Subtration of " + num1 + " and " + num2 + " is " + subtract)
// document.write("<br/>")
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplay)
// document.write("<br/>")
// document.write("Division of " + num1 + " and " + num2 + " is " + divide)
// document.write("<br/>")
// document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus)
// document.write("<br/>")

// Q3:
// var num;
// document.write("Value after variable declaration is: " + num)
// document.write("<br/>")
// num = 5
// document.write("Initial value: " + num)
// document.write("<br/>")
// num++
// document.write("Value after increment is: " + num)
// document.write("<br/>")
// num = num + 7
// document.write("Value after addition is: " + num)
// document.write("<br/>")
// num--
// document.write("Value after decreament is: " + num)
// document.write("<br/>")
// num = num % 3
// document.write("The remainder is: " + num)
// document.write("<br/>")


// Q4:
// var ticket = 600
// var cost = ticket * 5
// document.write("Total Cost to buy 5 ticket is: " + cost + " PKR")


// Q5:
// var table = 4
// document.write("<h1>Table of 4</h1>")
// document.write("<p> " + table + " x 1 = " + (table * 1) + "</p>")
// document.write("<p> " + table + " x 2 = " + (table * 2) + "</p>")
// document.write("<p> " + table + " x 3 = " + (table * 3) + "</p>")
// document.write("<p> " + table + " x 4 = " + (table * 4) + "</p>")
// document.write("<p> " + table + " x 5 = " + (table * 5) + "</p>")
// document.write("<p> " + table + " x 6 = " + (table * 6) + "</p>")
// document.write("<p> " + table + " x 7 = " + (table * 7) + "</p>")
// document.write("<p> " + table + " x 8 = " + (table * 8) + "</p>")
// document.write("<p> " + table + " x 9 = " + (table * 9) + "</p>")
// document.write("<p> " + table + " x 10 = " + (table * 10) + "</p>")


// Q6:
// var celcius = 25
// var farenhiet = 70

// var celciusToFarenhiet = (celcius * 9 / 5) + 32
// var farenhietToCelcius = (farenhiet - 32) * 5 / 9

// document.write(celcius + "C is " + celciusToFarenhiet + " F<br/>")
// document.write(farenhiet + "F is " + farenhietToCelcius + " C")

// Q7:
// var price1 = 650
// var price2 = 100

// var order1 = 3
// var order2 = 7

// var shippingCharges = 100

// var total = (price1 * order1) + (price2 * order2) + shippingCharges

// document.write("<h1>Shopping Cart</h1>")
// document.write("Price of item 1 is " + price1 + "<br/>")
// document.write("Quantity of item 1 is " + order1 + "<br/>")
// document.write("Price of item 2 is " + price2 + "<br/>")
// document.write("Quantity of item 2 is " + order2 + "<br/>")
// document.write("Shipping Charges " + shippingCharges + "<br/>")
// document.write("<hr/>")
// document.write("Total Cost of your order is " + total + "<br/>")

// Q8:
// var totalMarks = 980
// var obtainedMarks = 804
// var percentage = 100 * (obtainedMarks / totalMarks)

// document.write("<h1>Mark Sheet</h1>")
// document.write("Total Marks " + totalMarks + "<br/>")
// document.write("Obtained Marks " + obtainedMarks + "<br/>")
// document.write("Percentage " + percentage + "%<br/>")

// Q9:
// var usDollar = 10
// var suadiRiyal = 25

// var oneDollar = 104.80
// var oneRiyal = 28

// var totalCurrency = (usDollar * oneDollar) + (suadiRiyal * oneRiyal)

// document.write("<h1>Currency Exchange</h1>")
// document.write("Total Currency in PKR " + totalCurrency + "<br/>")

// Q10:
// var num = 10
// console.log(num + 5 * 10 / 2); // 35

// Q11:
// var currentYear = 2024
// var birthYear = 2002

// var age = currentYear - birthYear

// document.write("<h1>Age Calculator</h1>")
// document.write("Birth Year " + birthYear + "<br/>")
// document.write("Current Year " + currentYear + "<br/>")
// document.write("Age " + age + "<br/>")

// Q12:
// var radius = 20
// var PI = 3.142
// var circumference = 2 * PI * radius
// var area = PI * radius * radius

// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of a circle " + radius + "<br/>")
// document.write("Circumference of Circle" + circumference + "<br/>")
// document.write("Area of Circle" + area + "<br/>")

// Q13: The Lifetime Supply Calculator
var snack = "Rio"
var age = 22
var maxAge = 65
var estimatedAmount = 5
var calculate = (maxAge - age) * estimatedAmount

document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("Favourite Snack" + snack + "<br/>")
document.write("Current age" + age + "<br/>")
document.write("Maximum age " + maxAge + "<br/>")
document.write("Amount of snack per day " + estimatedAmount + "<br/>")
document.write("You will need " + calculate + " to last you until the ripe old age of " + maxAge)



// ------------------------ Assignment # 1 ----------------------------
// ------------------------ COMPLETED ----------------------------
// ------------------------ 😎😎😂😂😎😎 ----------------------------

