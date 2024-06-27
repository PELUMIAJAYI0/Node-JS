var  num = [34, 56, 78, 77, 90, 11];

for (let i=0; i<num.length; i++)
{
    if(num[i]%2==0)
    {
        console.log("Even Number ", i+1, " = ", num[i])
    }
    else if(num[i]%2==1)
    {
        console.log("odd Number ", i+1, " = ", num[i])
    }
}