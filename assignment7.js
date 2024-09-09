//Task 1

//Function Expression

const getPersonInfo = function(person) {
      return `Name: ${person.name}, Age: ${person.age}`;
    };
    
    console.log(getPersonInfo({ name: 'Ahsan Javed', age: 99 }));

//arrow function

const getPersonInfo1 = ()=> {
      return `Name: ${person.name}, Age: ${person.age}`;
    };
    
    console.log(getPersonInfo({ name: 'Ahsan Javed', age: 99 }));

//Task 2

//sum of two number

let number1;
let number2;
let number3;

const sumTwonumbers=(number1,number2)=>{
    return number1+number2;
}
console.log(sumTwonumbers(4,7));

//check even or odd

const checkEvenodd=(number1)=>{
    if(number1%2==0){
        console.log(`${number1} is even`);
    }
    else{
        console.log(`${number1} is odd`);
    }
    
}
checkEvenodd(5);

//check maximum number

function max_Number(number1,number2,number3){
    if(number1>number2 & number1>number3){
        console.log(`${number1} is maximum number`);
    }
    else if(number2>number1 & number2>number3){
        console.log(`${number2} is maximum number`);
    }
    else {
        console.log(`${number3} is maximum number`);
    }
    

}
max_Number(4,8,6);

//factorial number

function factorial(number1){
    let sum=1;
    for(let i=1;i<=number1;i++){
        sum*=i;
    }
    
    console.log(sum);
}
factorial(5);


//Palindrome Check

function pali(string){
    for(let i=0;i<string.length;i++)
    {
        let num2=string.length;
        if(string[i]==string[num2])
        {
        
            num2--;

        }
        else{
            console.log("this is not true");

        }
    }
    console.log('this is true');
    
}

//string reversal

function stringReversal(string){

    let reversed='';
    for(let element of string)
    {
        reversed=element+reversed;
    }
    console.log(reversed);
    return reversed;

}
stringReversal("abc");

//prime check

function primeCheck(number1){
    for(let i=2;i<number1;i++ )
    {
        if(number1 % i == 0){
            console.log("not a prime number");
            break;
        }
        else{
            console.log("prime number");
            break;
        }
    }
}

primeCheck(61);

//fibonacie sequence

function fib(number1){
    let num=1;
    let num1=1;

    for(let i=0;i<number1;i++)
    {
        let sum=num+num1;
        console.log(num);
        num=num1;
        num1=sum;

    }
    

}
fib(1);



//palindeome check

function plaindromeCheck(string1){

    let string2=stringReversal(string1);
    console.log(string2);
    console.log(string1);
    if(string1==string2)
    {
        console.log("this is palindrome");
    }
    else{
        console.log("this is not a plaindrome");
    }




}

plaindromeCheck('hamza')











