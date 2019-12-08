// Compare the Triplets

function compareTriplets(a, b) {
        let counta = 0,
        countb = 0;
        for(let i=0; i<a.length; i++){
            if(a[i] > b[i]){
                counta++;
            }
        else if(a[i] < b[i]){
            countb++;
        }
    }

return [counta,countb];