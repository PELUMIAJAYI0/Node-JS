//Program to seperate even number and odd numbers in an array 

var  numbers;
numbers = [1, 2, 3, 4, 5, 6,7,8,9,23,46,78,90, 45, 12, 34, 45,67,89];

for (let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==0)
    {
        console.log("Even Number", i+1, "--->", numbers[i])
    }
    else if(numbers[i]%2==1)
    {
        console.log("odd Number", i+1, "--->", numbers[i])
    }  
}