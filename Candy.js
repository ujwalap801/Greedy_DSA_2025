/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(arr) {

    let n = arr.length;
    let leftRight = Array(n).fill(1);
    let RightLeft = Array(n).fill(1);

    let ans =0;
    for(let i=1; i<n;i++)
    {
        if(arr[i] > arr[i-1])
        {
            leftRight[i] = leftRight[i-1]+1;
        }
    }



      for(let i=n-2; i>=0;i--)
    {
        if(arr[i] > arr[i+1])
        {
            RightLeft[i] = RightLeft[i+1]+1;
        }
    }

    for(let i=0; i<RightLeft.length;i++)
    {
        ans += Math.max(RightLeft[i], leftRight[i])
    }

   

 return ans;
    
};