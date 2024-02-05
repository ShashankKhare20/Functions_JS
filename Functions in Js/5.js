function factorial(n){
    if (n===0 || n===1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log("Factorial of 0 :",factorial(0));
console.log("Factorial of 1 :",factorial(1));
console.log("Factorial of 3 :",factorial(3));
console.log("Factorial of 4 :",factorial(4));