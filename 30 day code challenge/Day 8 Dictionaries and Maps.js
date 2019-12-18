function processData(input) {
    //Enter your code here
     array = input.split('\n');
    var n = parseInt(array[0]);
    var searchSize = array.length - parseInt(n);
    var phoneBook = {};
    
    for(i = 1; i <= n; i++){
        var info = array[i].split(' ');
        phoneBook[info[0]] = info[1];
    }
    
    for(y = 1; y < searchSize; y++){
        var name = array[y + n];
        if(phoneBook.hasOwnProperty(name)){
            console.log(name + '=' + phoneBook[name]);  
        } else {
            console.log('Not found');
        }
    }
}