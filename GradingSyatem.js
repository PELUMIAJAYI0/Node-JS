//Program to to create grading system for anchor university secondary school
var score = 45;

if(score>=70 && score<=100)
{
    console.log("Your grade is---> A")
} else if(score>=60 &&score<=69)
{
    console.log("Your grade is---> B")
}else if(score>=50 &&score<=59)
{
    console.log("Your grade is---> C")
} else if(score>=45 &&score<=49)
{
    console.log("Your grade is---> D")
} else if(score>=40 &&score<=44)
{
    console.log("Your grade is---> E")
} else if(score>=0 &&score<=39)
{
    console.log("Your grade is---> F")
} else
{
    console.log("Not with the range of accepted scores or grade");
}
