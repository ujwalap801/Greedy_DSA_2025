/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let ans =[];

    let first = Array(26).fill(-1);
    let last = Array(26).fill(-1);

    for(let i=0;i<s.length;i++)
    {
        let curr = s.charCodeAt(i)-97;
        if(first[curr] <0)
        {
            first[curr] =i;
        }
        last[curr] =i;
    }
    

    let paritionStart = paritionEnd =0;
    for(let i=0;i<s.length;i++)
    {
        let curr = s.charCodeAt(i) -97;

        if(paritionEnd < first[curr])
        {
            ans.push(paritionEnd - paritionStart +1);
            paritionStart = paritionEnd =i;
        }


        paritionEnd = Math.max(paritionEnd, last[curr]);

    } 



// only handles last case
if(paritionEnd - paritionStart +1 >0)
{
    ans.push(paritionEnd - paritionStart +1)
}

return ans;
};