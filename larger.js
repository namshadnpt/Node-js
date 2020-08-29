var r=require('readline-sync')
var num1=r.question("Enter 1st nmber ")
var num2=r.question("Enter 2nd nmbr ")

if(num1>num2){
    console.log(num1 +" is greatr")
}
else if(num1===num2){
    console.log("Equal")
}
else{
    console.log( num2 + " is greater")
}