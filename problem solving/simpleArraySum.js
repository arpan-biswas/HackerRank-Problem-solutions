//Simple Array Sum

/* Given an array of integers, find the sum of its elements.

For example, if the array
, , so return . */

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    return ar.reduce((acc, current) => acc += current, 0 )
    
}