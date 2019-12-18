function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    var out = '';
    for (var i= arr.length-1; i >= 0; i-- ){
        out = out + arr [i] + ' ';   
    }
    console.log(out); 
}