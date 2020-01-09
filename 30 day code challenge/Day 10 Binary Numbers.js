function main() {
    const n = parseInt(readLine(), 10);
    // code is written here
     var num = '' +  parseInt(n, 10).toString(2); 

    var count = 0; //intitialize count 
    var result = 0; //initialize max 
  
    for (var i = 0; i < num.length; i++) 
    { 
        // Reset count when 0 is found 
        if (num[i] == 0) 
            count = 0; 
        // If 1 is found, increment count 
        // and update result if count becomes 
        // more. 
         else
        { 
            count++;//increase count 
            result = Math.max(result, count); 
        } 
    }  
    console.log (result); 
}           
