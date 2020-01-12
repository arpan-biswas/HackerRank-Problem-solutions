function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    var sum=[];
    var max = 0;
    //console.log(arr[0][5]);
    var total = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            sum[total] = parseInt (arr[i][j]) + parseInt (arr[i][j+1]) + parseInt (arr[i][j+2]) + parseInt (arr[i+1][j+1]) + parseInt (arr[i+2][j]) + parseInt (arr[i+2][j+1]) + parseInt (arr[i+2][j+2]);
            total++;
        }
    }
    //sum.sort();
    //max= Math.max.apply(Math, sum)
   console.log(Math.max.apply(Math, sum));
}
