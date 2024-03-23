console.log("Hello fro typeScript");

let userName:string  ="jake";
userName = userName.toUpperCase();
console.log(userName);

let  userId:number =23;
userId = 34;

console.log(userId);

let isAwsome: boolean = true;
isAwsome = false;

let tax :number | string = 10;
tax = 100;
tax = '$23';
console.log(tax);

let requestStatus: 'pending' | 'success' | 'error' | 'pending';
requestStatus = 'success';
requestStatus = 'error';

console.log(requestStatus);



const books =['Java','Css',"Html",'JavaScript','TypeScript'];

let foundBook : string | undefined ;

for(let book of books) {
  if(book ==="ypeScript"){
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    console.log(foundBook);
    
    break;
  }
}
console.log(foundBook?.length);

// Arrays in typeScrpt
let prices : number[] = [100,75,42];
let fruit: string[] =['apple','orange'];


function greeting(name:string){
  console.log(`Hello dear ${name.charAt(0).toUpperCase()+name.substring(1,name.length).toLocaleLowerCase()} !!! Welcome to party`);
  
}

greeting('arman')

const createStudent =({id}:{id:number}):{
  id:number;
  isActive :boolean;
} =>{
  return {id,isActive: id % 2===0};
}

const s1 = createStudent({id:1});
const s2 = createStudent({id:2});
console.log(s1,s2);

const createEmpolyee =(emp:{id:number;name:string})=>{
  console.log(`Welcome to the team ${emp.name.toUpperCase()}`!!!);
  
}

const empolyee ={
  id :23,
  name:"alex",
  email:"alex@typeScript.com"
}
createEmpolyee(empolyee)

type Genre = 'Fiction' | 'Non-Fiction' | 'Info'
type Electornic  = {
  id:number;
title:String;
author:string;
price:number;
format:string;
genre: Genre [];
}

type Non_Electornic  = {
  id:number;
title:String;
author:string;
price:number;
genre: Genre [];
}

type Book = Electornic | Non_Electornic;

const bookInfo =(book:Book) : void => {
  if('format' in book){
    console.log(`${book.title} format is ${book.format}`);
    
  } else {
    console.log(`${book.title} is non-Elelctornic book`);
    
  }
  
}

const java : Electornic ={ 
  id:1,
  title:'Intro to java',
  author:'Arman',
 price:34.77,
 format:'epub',
genre:['Non-Fiction','Info']
}
const typeScript : Non_Electornic ={ 
  id:3,
  title:'Intro to TypeScript',
  author:'Nickan',
 price:44.77,
genre:['Non-Fiction']
}

bookInfo(java)
bookInfo(typeScript)







