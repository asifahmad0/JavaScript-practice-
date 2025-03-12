/*var alart="ths is alert"

alert(alart);
document.write('this is document');
prompt("enter your feedback","good function");
confirm("do you want to conform");
*/

//var x =document.getElementsByClassName("main")[0].innerHTML;
//console.log(x);
//get= prompt("entre some thing", "entre here ")
//var id =document.getElementById("myid").innerHTML=get;


/*var x =document.getElementsByClassName("main").innerHTML;
console.log(x);*/

/*
myid.innerHTML="my name is asif"; //myid is aid of html div
document.getElementById("myid").style.fontSize="2em"; //use css like this mathord 
document.getElementById("myid").style.background="blue"; //use css like this mathord 
document.getElementById("myid").style.color="white"; //use css like this mathord
*/
//console.error("this is error")
//console.warn("this is a warning")
//--------------------------------------------------variables--------------------------------------
/*
var str="my name is asif "; // string variable
let age= 22; // integre variable
const buln= true; // boolen variable
const student= { // object variable 
    name:"anam",
    roll: 20, 
    cgpa:8.5,
    age:22
}
student.name = "asif ahmad" //changed name 
student.age = student.age +1 // increas age by one 
console.log(student.name); 
console.log(student["age"]);
console.log(typeof(student));
*/
//===========================================Arathmatics Oprator======================================

// let a= 5;
// let b= 2;

// console.log("5 + 2 =", a+b);
// console.log("5 - 2 =", a-b);
// console.log("5 * 2 =", a*b);
// console.log("5 / 2 =", a/b);
// console.log("5 % 2 =", a%b);
// console.log("5^2 =", a**b);

//========================================for loop===============================================

// sum of n numbres and print 
/*
let num =prompt("entre your numbre ")
let sum=0;
for(i=1; i<=num; i++) {
    sum+=i
}
document.write(sum)

for(i=1; i<=5; i++){
     console.log('i=',i)
}

//Odd numbre print
for(a=1; a<="10"; a++){
    if(a%2 !==0){
    console.log(a)}
}

// print table
let a= prompt("entre your numbre ")

for(b=1; b<10; b++){
console.log(a,"*",b,"= ",a*b,"\n");
}


*/

//--------------------------------------------for of loop use for str and arrys
/*// let str= "my name is asif ahmad";
// for(i of str){
//     console.log(i)
// }
var arr = [25,55,68,62,75,92,48];
for(y of arr){
    var x= prompt("Gesh the Numbre what I think"," entre your Answer ");
    if(x==y){
        alert("congrats your Gesh is currect, your are genias  ");
    }else{
        alert("You are wrong, currect numbre is  ",y);
    }
}
*/


//---------------------------------------------------for in loop use for object
// let student= { // object variable /disnery
//     name:"anam",
//     roll: 20, 
//     cgpa:8.5,
//     age:22
// };

// for(i in student){
//     console.log(i)
// }
//=========================================while loop
// let i=1;
// while( i<=5){
//     console.log(i)
//     i+=1
// }
//-------------------------------------do while loop run only one time 

// let i=20;
// do{
//     console.log("my name is asif");
// }while(i<=5){
//     console.log("my name is asif ");
// }

//-----------------------------------------------STRINGS-----------------------------------------------

//let x = " My Name is Asif ";// str1
//let a = " roll no 26"; //str 2

//var y= x.length;
//var z =`my name is asif ahmad${5*5} `; //spacile string we can proform multyple opration in a string
//var y= x.toUpperCase()// for upper case
//var y= x.toLowerCase()// for lower case
//var y=x.trim() // eres white space from start to end 
//var y = x.slice(12var,16) // get the str from idx 12 to idx 15 
// y = a.concat(x); // add 2 str i one line 
//var y = x.replace ("Asif", "Anam"); //replace methord use .replace()/ .replaceAll() 
//var y = x.charAt(12) // finde the charectre from given index
//console.log(y);

// get value from user and creat a user name for user 
/*
 var a = prompt("entr your name ");
 var mobile = prompt("entr your mobile ");
 var b = "@";
 let c =  a.length;
 let y = b+a+c;
console.log(y);
*/


//------------------------------------------------------ Arrays
// let marks= [45,58,54,65,95,55,85,54,65,68,48]; //array 
// console.log(marks,marks.length, typeof(marks)); // array length and type
// marks[5]=51;// change of index 5
// console.log(marks[5]); 
// console.log(marks,marks.length, typeof(marks));

// for (i of marks){ //print all array using for of loops
//     console.log(i)
// }

// var mark= [85,97,44,37,76,60];
// var sum=0;
// let a=0;
// for(i of mark){
     
//     let f=i;
//     sum+=f;
//     a+=1
//     console.log(sum)
// }
// var avg=sum/a;
// console.log(`YOUR AVRAGE IS ${avg}`);

// you have given price list and minuse 10% and add new price in the list
/*
var price=[250,645,300,900,50];
idx=0;
for (i of price){
    console.log(`your index ${idx} current value ${i}`);
    var offer_price=i/10;
    var new_price=i-offer_price;
    price[idx]=new_price;
    console.log(`your index ${idx} value after 10% off ${new_price}`);
    idx+=1;
}
console.log(price);
*/
// let  arr=[34,45,44,24,58,10];

// function shor(){
//     let a=arr.sort();
//     console.log(a);
// };
// shor();

/*function genotp(length){
    let otp="";
    for(i=1; i<=length; i++){
        otp+=Math.floor(Math.random()*10).toString();
    }
    return otp;
}
let a=genotp(6);
alert(a);*/

//------------------------------------------------------ functions

// function nam(value1,value2){ // paramitre and this note work Auter function
//     let a= value1, value2;
//     console.log(value1,value2);
//     return a;
// Aftre return methord any code was note worked

// }
//var val=nam("my name","is Asif Ahmad");
//console.log(val);

// Arrow function introduse in morden JavaScipt

// let ArrowSum=(a,b)=>{
//     console.log(a+b);
// }
// ArrowSum(2,5);

// Have vowel or not
// var input = prompt("Entre Your value");
// var count=0
// var b = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
// function vowel(value) {
//     for (i of value) {
//         for (j of b) {
//             if (i == j) {
//                 console.log(`The Vowel is ${i}`);
//                 count+=1
//             }
//         }
//     }
//     console.log(`There is ${count} Vowels`);
// }
// vowel(input);

// var input = prompt("Entre Your value");
// var count = 0;
// function vowel(value) {
//   for (i of value) {
//     if (
//       i == "a" ||
//       i == "A" ||        //or methord   || => or
//       i == "e" ||
//       i == "E" ||
//       i == "i" ||
//       i == "I" ||
//       i == "o" ||
//       i == "O" ||
//       i == "u" ||
//       i == "U"
//     ) {
//       console.log(`The Vowel is ${i}`);
//       count += 1;
//     }
//   }
//   console.log(`There is ${count} Vowels`);
// }

// vowel(input);

// let new_fun = (val) => { one more methorde to write a function
//   console.log("I Am Asif Ahmad");
// }




//=======================================================methord
// var arr=[2,5,3,5,8,44,5];
// arr.forEach(function(val){
// console.log(val);
// });

// var arr=[1,2,3,4,5,6,7,8,9,10];

// arr.forEach((val)=>{ //functions start in (val)
//        let sq=val**2;
//       console.log(`Square of ${val} is ${sq}`);
// })

//map
// var arr=[1,2,3,4,5,6,7,8,9,10];

// arr.map((val)=>{ //map methord creat a new array after proforming a task
//        let sq=val**2;
//       console.log(`Square of ${val} is ${sq}`);
// })

// var arr=[1,2,3,4,5,6,7,8,9,10];

// let new_arr=arr.filter((val)=>{ // find the even numbre using the filre methorde
//        return val%2==0;

// });
// console.log(new_arr);

//===============================================Document oriented Modle===================================

//let head= document.querySelector('h2');
//head.innerText="my name is asif ahmad";
// head.remove();

// let div1 = document.querySelector('#myid'); // FOR Access div id or class

// let divid= div1.getAttribute('id');// FOR GET div id or class name
// console.log(divid);

// let changeid=div1.setAttribute("id", "newid");// FOR SET/change div's new id or class name 
// console.log(changeid);
// let div1 = document.querySelector('#myid');
// let span= document.createElement('span');
// let newBtn= document.createElement('button');//  for lear creat Element 
// newBtn.innerText="See More"
// div1.append(span); // for learn var.appand() div ke andar but content ke last me 
// div1.prepend(newBtn);  // for learn var.prepand() div ke andar but content ke start me 
// div1.before(newBtn);  // for learn var.before() div ke bahar but div ke start me
// div1.after(newBtn);  // for learn var.after() div ke bahar but div ke last me

// let head= document.querySelector('h2');
// head.setAttribute('class', 'css');
// head.classList.add('newClass');
//head.classList.remove('css');
// let div=document.querySelector('#myid');
// let btn=document.createElement('button');
// div.append(btn);
// btn.innerText='Click Me';
// btn.style.background='green';
// btn.style.color='white';
// btn.style.padding='10px 20px'

// div1 = document.querySelector('#myid');
// let btn2 = document.createElement('button');
// let btn3 = document.getElementById('btn3');
// div1.append(btn2);
// btn2.innerText="click me 2";

// btn2.onclick = ()=>{ // event write methord no 2
//     console.log("btn 2 working");
// }

// btn3.addEventListener('click', function(){
//     console.log("Btn 3 is working ");
// })

///////////////////////////////CLASSES AND OBJECTS/////////////////////////////


// let employe = {
//     name: 'Asif Ahmad',
//     marks: 85,
//     printMarks: function(){ // under the objext you can write function like this 
//         console.log('marks',this.marks);
//     },
//     calTax(){// under the objext you can write function or like this 
//         console.log('tax is 12%');
//     }
// }

// class toyota{
//     start(){
//         console.log('car start');
//     }
//     stop(){
//         console.log('car stop');
//     }
//     Brande(brande){
//           this.Brande=brande;
//     }
//     Color(color){
//         this.Color=color;
//   }
// }

// let fortuner= new toyota();
// fortuner.Brande('Fortuner');
// fortuner.Color('Red');
// console.log(fortuner);

//----------------------Api Fetch/ Integration
/*let main = document.getElementById('main');
fetch("https://dummyjson.com/products").then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data); 

    data.products.map((item)=>{
        main.innerHTML += `<div class="cart">
        <div class="img">
          <img src="${item.images[0]}" />
        </div>
        <div class="contant">
          <h1>${item.title}</h1>
          <p>${item.description}</p>
        </div>
      </div>`;
    });
}).catch((error)=>{
    console.log(error);
});
*/
