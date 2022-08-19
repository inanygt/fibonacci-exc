const fibonacci = function (n) {
   if (n < 0) {
      return "OOPS";
   }
   let a = 0; 
   let b = 1;
   let sum; 
   for (let i = 2; i <= n; i++) {
      sum = a + b;
      a = b;
      b = sum;
   }
   return sum;
};

// Do not edit below this line
module.exports = fibonacci;


// fibonacci = 

// 0 + 1 = 1
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21

// npm test fibonacci.spec



