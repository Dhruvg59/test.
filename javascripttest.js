// Ques1 Entry control loops aloows you to execute a block of code repeatedly.For example, for loop, while loop.

// Exit controlled loops  allow repetitive execution of a block of code based on a condition that is checked 
// after entering the loop.for example while loop , in while loop te code will execute atleast once .

//Ques 2
for (let i = 1; i <= 3; i++) { 
    for (let j = 1; j <= 3; j++) { 
    if (i === j) continue; 
    console.log(i + j); } 
   }

//    Dry run

//    i=1 = ram 
//    i<=3 , 1<=3 true

//    j=1 =ram = j<=3 , 1<=3; true 

//    i===j => true 
//     continue statement will skip the next iteration 

//     J++
//     j=2 , 2<=3 true 
//     i===j false 
//     i+j , = 1+2 = 3

//     j++
//     j=3 , 3<=3 true 
//     i===j false 
//     i+j = 1+3 =4 ;

//     i++
//     i=2 =ram 
//     i<=3 , 2<=3 true 

//     j=1
//     j<=3,1<=3 true 
//     i===j false 
//     i+j= 2+1 =  3;

//     j++
//     j=2 ,2<=3 true 
//     i===j true 
//     continue statement will skip the next iteration 

//     j=3 ,3<=3 true ;
//     i===j false ;
//     i+j= 2+3 =  5;

//     i++
//     i=3;
//     3<=3 true

//     j=1 , j<=3 , 1<=3 true
//     i===j flase 
//     i+j= 3+1 = 4;

//     j++, j=2 , 2<=3 true 
//     i===j false 
//     i+j= 3+2= 5

//     J++ , j=3 , 3<=3 true 
//     i===j true ;
//     due to continue staement it will skip the next iteration



//ques 3
let found = false; 
for (let i = 1; i <= 3; i++) { 
for (let j = 1; j <= 3; j++) { 
if (i * j > 4) { 
found = true; break; 
} 
console.log(i, j); 
} 
if (found) break; 
}

// dry run 

// i=1; 1= ram; i<=3, 1<=3 true 
// j=1; j<=3 , 1<=3 true 
// if i*j >4 = 1*1 =1 >4 false (break staement wont work until and unless its value is greater than 4 )
// log i,j = 1, 1

// J++,j=2,2<=3  true 
// if i*j >4 = 1*2 =2 >4 false 
// log i,j = 1, 2

// J++,j=3,2<=3  true 
// if i*j >4 = 1*3 =3 >4 false 
// log i,j = 1, 3

// i++
// i=2;2= ram , 2<=3; true 
// j=1 , j<=3 , 1<=3 true 
// if i*j >4 2*1 =2 >4 false 
// log i,j =2,1 

// j++
// j=2 , j<=3 , 2<=3 true 
// if i*j >4 2*2 =4 >4 false 
// log i,j =2,2 

// j++
// j=3 ,j<=3 ,3<=3 true 
// if i*j >4 2*3 =6 >4 true
// then the break statement will work and go out from the nearby loop ;


// Ques 4

let pattern = ''; 
 for (let i = 1; i <= 5; i++) { 
for (let j = 1; j <= i; j++) {
 pattern += '*';
 } 
pattern += '\n';
 }
 console.log(pattern);


//  dry run 

//  i=1,i<=5 , 1<=5 true 
//  j=1; j<=i;1<=1 true ;
//  pattern+= *;             
//  /n next line 
//  log "*\n";

//  j++
//  j=2;j<=i;2<=1 false ;(loop break back to outer loop)

//  i++,i=2;2<=5 true 

//  j=1,j<=i ;1<=2 true (j will run 2 times for j=1 andj=2 )
//  patern prints *
//  j=2= 2<=2 true 
//  pattern prints *
//  new line 
//  pateern becomes=**\n

//  *\n**\n

//  i=3
//  j=1,2,3 true (j will run 3 times)
// pateern becomes ***
// *\n**\n***
// new line 
// *\n**\n***\n

// i=4
// j=1,2,3,4 true (j will run 4 times)
// i.e it will print the paterrn = 4 times = ****
// patern becomes  *\n**\n***\n****
// new line 
// *\n**\n***\n****\n

// i= 5
// j=1,2,3,4,5  (j will run 5 times)
// pettern =*****
// pattern becomes=  *\n**\n***\n****\n*****
// new line 
// *\n**\n***\n****\n*****\n  => (output)

// i++
// i=6 = false so loop stops 

// ques 5

let nsp=0;
let nst=4;

for(let row=1;row<=5;row++){
    //space
    for(let sp=0;sp<=nsp;sp++){
        process.stdout.write(" ");
//star

    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("* ");

    }
    //update
    nsp=nsp+3;
    nst=nst-1;
    console.log();
    
}


//print prime number from 1- 100

function primenumbers(num){
for(let i=2; i<=num;i++){
    
    if(i% 2!=0 && i%3!=0 && i%5!=0 && i%7!=0 ){
        console.log("its a prime number "+i);
        
    }else if ( i%2==0 ) {
        // console.log("not a prime "+i);
        
    } else {
        continue;
    }
}
}

primenumbers(100)


// ques 7

function anybasetodecimal(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%10;
        num=Math.floor(num/10)
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*base;
    }
    return ans;
}

 
function decimaltoanybase(num,base){
    let ans =0;
    let pow=1; 
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}



function anybasetoanybase(num1, base1 , base2){

   

    let decimalnumber=anybasetodecimal(num1,base1);
        let finalconvertednumber=decimaltoanybase(decimalnumber,base2)
   
        console.log(finalconvertednumber);
        
}

anybasetoanybase(66,18,14)




