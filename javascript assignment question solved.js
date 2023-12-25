// Q1. Explain the role operators in javascript.Why are they essentioal in programming?

//ans:-JavaScript Operators are fundamental elements in programming, enabling you to perform various actions on data. From arithmetic operators for math operations to logical operators for making decisions, understanding JavaScript Operators is key to writing efficient and effective code.

// Q2. Describe the categorization of operators in javascript based on their functionality.
//     prvide examples for each category.

// ans:-In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). 
//      javascript operator types 
//      Assignment Operators :-Assignment operators(=) assign values to JavaScript variables.
//      example- let x=5;
//               let y=5;
//               let z =x+y;
//     Arithmetic Operators :-Arithmetic Operators are used to perform arithmetic on numbers.
//     example- let a = 3;
//              let x = (100 + 50) * a;
//     Comparison Operators:-Comparison operators compare two values and return a boolean value,either true or false.
//     example- ==	equal to
//             !=	not equal
//     Logical Operators:-Logical operators perform logical operations and return a boolean value, either true or false.
//     example- const x = 5, y = 3;
//             (x < 6) && (y < 5); // true

//     Bitwise Operators:-Bitwise operators perform operations on binary representations of numbers.
//     example-& Bitwise AND

//     String Operators:-
//     example-
//     console.log('hello' + 'world');
//     let a = 'JavaScript';
//     a += ' tutorial';  // a = a + ' tutorial';
//     console.log(a);

// Q3. Differentiate between unary,binary, and ternary operators in javascript.Give examples of each.
// ans. What is a Unary Operator?
        These operators require one operand for operation.
        Providing two or more can result in a syntax error. 
        Here are some examples of operators that fall under this category.
            example: 1.the typeof operator
                        The typeof operator returns the data type of a value. 
                        It requires only one operand. Here's an example:typeof "hello"
        What is a Binary Operator?
        These operators require two operands for operation.
        If one or more than two operands are provided, such operators result in a syntax error.
        example: 1.Arithmetic operator :-10 + 20,10-5,2*5
                2.Comparison Operators :-10>20,20<80
        What is a Ternary Operator?
        These operators require three operands. In JavaScript, there is one operator that falls under this category – the conditional operator.
        example: Conditional Operator
            const score = 80
            const scoreRating = score > 50 ? "Good" : "Poor"

//Q4. Discuss the precedence and associativity of operators in javascript.Why is understanding these concepts important?
// ans: Operator precedence refers to the priority given to operators while parsing a statement that has more than one operator performing operations in it. 
        Operators with higher priorities are resolved first.
            Precedence and Associativity
        Associativity in general states that irrespective of the order of operands for a given operation the result remains the same.
        Precedence is used to tell the compiler what operations should be performed first.
        ( 5 + 5 ) + 2 = 4 + ( 2 + 5 )
        ( 6 >= 3 ) or ( 2 != 4 )    


//Q5. Write a javascript program to calculates the simple interest using the formula simple interest =(principal*rate*time)/100.

// let p = 20000;
// let r = 10;
// let t = 1;
// let SI = (p * r * t)/100;
// console.log("Simple Interest = "+SI);

//Q6. Write a javascript program to calculate the body mass index(BMI) using the formula BMI =weight(kg)/height*height. 

function calculateBMI(weight,height){
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters*heightInMeters);
    return bmi;
}
const weight = 70;
const height = 175;

const bmiResult = calculateBMI(weight,height);
console.log("BMI : ",bmiResult);

//Q7. Write a program in javascript to calculate the area of a circle given its radius value of 10.use appropriate arithetic operators.

let pi = 3.14159265358979323846;
 
    // Function to calculate the area of circle 
    function findArea(r) {
        return (pi * r * r);
    }
 
    // Driver code 
    let r, Area;
    r = 10;
 
    // Function calling 
    Area = findArea(r);
 
    // displaying the area 
    console.log("Area of Circle is: " + Area);
