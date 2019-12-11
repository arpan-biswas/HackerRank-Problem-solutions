function solve(meal_cost, tip_percent, tax_percent) {
   var tip = meal_cost*tip_percent/100;
   var tax = meal_cost*tax_percent/100;
   var totalCost= Math.round(meal_cost + tip + tax) ;
   console.log(totalCost);
   
}