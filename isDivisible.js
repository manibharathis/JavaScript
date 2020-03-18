
//returns true if a number is divisible by the following to numbers
function isDivisible(n1,q1,q2)
{
    if((n1%q1==0)&&(n1%q2==0))
    {
        return true
    }
    else
       return false
}

console.log(isDivisible(10,5,2))
Console.log(isDivisible(12,6,12))