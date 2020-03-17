
//returns sum of positive numbers
function SumArray(Numbers)
{
    if(Numbers.length===0)
    {
        return 0
    }
    let sum=0;
   Numbers.map(e=>{
       if(e>0)
       sum=sum+e
   })
   return sum
}

console.log(SumArray([10,20,-10,-20]))
console.log(SumArray([]))
console.log(SumArray([-1]))