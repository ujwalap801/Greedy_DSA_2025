/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(arr, n) {

    let map = new Map;
    let max =0;
    let count =0;
    for(let i=0;i <arr.length;i++)
    {
        if(!map.has(arr[i]))
        {
            map.set(arr[i], 1);
        }else{
            map.set(arr[i], map.get(arr[i]) +1)
        }
    }

console.log(map);

let newArray = Array.from(map.values())
console.log(newArray)

for(let i=0;i<newArray.length;i++)
{
   
   if(newArray[i] >=max)
   {
max = Math.max(newArray[i], max);
count++;
   }
}


let formula = ((n+1) *(max-1)) +count
return  Math.max(formula, arr.length);
    
};




// Another way

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(arr, n) {
    let freq = Array(26).fill(0);
    let maxFreq =0

    for(let i=0;i<arr.length; i++)
    {

        let curr =arr[i].charCodeAt() - 65;
        freq[curr]++;
     maxFreq = Math.max(maxFreq, freq[curr]);

    }


let count =0
    for(let i=0;i<26;i++)
    {
if(freq[i] == maxFreq)
{

    count++;

}
    }



    let result =((n+1)*(maxFreq -1)) + count;
    return Math.max(result, arr.length)
};