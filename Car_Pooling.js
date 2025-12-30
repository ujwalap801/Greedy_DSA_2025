/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(arr, capacity) {

    let loc  = Array(1001).fill(0);

    for(let i=0;i<arr.length;i++)
    {
        let [pass, from, to] = arr[i];
        loc[from] = loc[from] + pass;
        loc[to] = loc[to] -pass;
    }
let used =0;
for(let i=0; i<1001;i++)
{
    used += loc[i];
    if(used >capacity)
    {
        return false;
    }
}


return true;
    
};