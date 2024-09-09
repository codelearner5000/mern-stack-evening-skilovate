const readline=require('readline');
const rl=readline.createInterface({input:process.stdin,output:process.stdout});

let num1=0;
let num2=0;
let arr=[];
let arr1=[];
let add=0;
let subtration=0;
let multiplication=0;
let division=0;



rl.question(`please give num1 ` ,(input)=>{
   

    num1=parseInt(input);
    if(Number.isNaN(num1)==false){
        rl.setPrompt("please give another number=")
        rl.prompt();
        rl.on('line',(input)=>{
            num2=parseInt(input);
            if(Number.isNaN(num2)==false)
                {

                rl.close();
            }
                else{
                    rl.setPrompt("incorrect response please give number=")
                    rl.prompt();
               
                    
                }
     });

        
    }
 else{
            rl.setPrompt("incorrect response please give number=");
            rl.prompt();
            rl.on('line',(input)=>{
                    num1=parseInt(input);
                    if(Number.isNaN(num1)==false)
                        {

                        rl.close();
                    }
                        else{
                            rl.setPrompt("incorrect response please give number=")
                            rl.prompt();
                            
                            
                        }
             });
            }
 });

rl.on('close',()=> {
    add=num1+num2;
    arr.push(add);
    arr1.push("add");
    subtration=num1-num2
    arr.push(subtration);
    arr1.push("subtraction");
    multiplication=num1*num2;
    arr.push(multiplication);
    arr1.push("multiplication");
    if(num2==0){
         division="Math Error because denominator is 0"
         
        arr.push(division);
        arr1.push("division");
       
    }
    else{
        division=num1/num2;
        arr.push(division);
        arr1.push("division");
    }

 
    for(let i=0;i<arr.length;i++){
            console.log(`result of ${arr1[i]} = ${arr[i]} `);
        }

    
    

   
});



