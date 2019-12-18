//Day 9 Recursion 3

//Problem factorial function

// Complete the factorial function below.
function factorial(n) {
     if (n < 0) 
        return -1;
  else if (n == 0) 
      return 1;
  else {
      return (n * factorial(n - 1));
  }

}