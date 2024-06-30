// Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrOdd(number) {
    str = "";
    if (number % 2 == 0) {
        str += `Even`;
        return str;
    }
    else {
        str += `Odd`;
        return str;
    }
}