// const myfunction : Function  =() =>{
//   console.log("hellow");
// }



// // OPtional string >?
// // default value 
// const myfunction = (a:string , b?:String ,c:String ='10') =>{
//   console.log('Hellow', a+b);
  
// }

// myfunction('a','b');

// let a:string;
// let AddTwoNumber :(num1:number ,y:number)=>number;

// AddTwoNumber =(a:number ,b:number) =>{
//   return a+b;
// }


class userData {
  age :number;
  name:string;
  constructor(name:string,age:number){
    this.name =name;
    this.age = age;
  }
  play(){
    console.log(`${this.name} age is ${this.age}`);
  }
}

const mash= new userData('mash',35);
const sakib= new userData('sakib',35);

  