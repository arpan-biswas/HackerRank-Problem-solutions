function main() {
    const n = parseInt(readLine(), 10);

// converting decimal to binary and inserting the value into array
    var num = '' +  parseInt(n, 10).toString(2); 

    var count = 0; // to count the consecutives
    
    for (var i= 0; i<num.length; i++){
        if ( num [i] ===1 ){
            if (num[i] === num [i+1]){
            count++;
            }            
        }
        if ( num [i] ==1) {
            count= 1;
        }

    }
        console.log(count);
}