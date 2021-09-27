// BASIC
let id: number=5
let company: string ="Gideon Odioks"
let isPublished: boolean=true

let x: any="Hello"
let ids: number[] =[1,2,3,4,5]

let arr: any[] =[1,"Gideon", true]

// Tuple
let person: [number, string, boolean]= [1, "Gideon", true]
  
// Tuple Array
let employee: [number, string][];

employee = [
    [1, 'John'],
    [2, 'Gideon'],
    [3, 'Odiokine'],
]

// Union

let pid: string | number;

pid="22"

// Enum
enum Direction1{
    Up =1,
    Down,
    Right,
    Left
}

enum Direction2{
    Up ="Up ",
    Down ="Down",
    Right ="Right",
    Left="Left"
}

// console.log(Direction2.Left)


// Objects
type User={
    id: number,
    name:string
}

const user:User={
    id:1,
    name:"Gideon"
}
// console.log(user)


// Type Assertion
let cid: any =1
let customerId= cid as number;
customerId = 5
// console.log(customerId)


// Functions
function addNum(x:number, y:number):number{
    return x + y
}
// console.log(addNum(2,4))

// Void
function log(message:string | number):void{
    console.log(message)
}
log("Odiokineh")


// Interfaces
interface UserInterface{
    readonly id: number,
    name:string,
    age?:number
}

const user1:UserInterface={
    id:1,
    name:"Gideon",
    age:22
    
}
const user2:UserInterface={
    id:2,
    name:"Odiokine",

}

interface Mathfunc{
    (x:number, y:number):number
}

const add:Mathfunc =(x:number, y:number):number => x + y;
const sub:Mathfunc=(x:number, y:number):number => x - y;

// Classes

class Person {
    // private or protected
     id:number
    name:string

    constructor(id:number, name:string){
        this.id=id
        this.name=name

    }
    register(){
        return `${this.name} is now reistered`
    }
}
const mum= new Person(2, "Atim")
const dad = new Person(4, "Okon")
// console.log(dad.register())

interface PersonInterface{
    id: number,
    name:string,
    register():string
}


// Using classes with Interface
class Person1 implements PersonInterface {
    // private or protected
     id:number
    name:string

    constructor(id:number, name:string){
        this.id=id
        this.name=name

    }
    register(){
        return `${this.name} is now registered with the ${this.id}`
    }
}

// const me = new Person1(5, "Okon")


// How to extend classes  
// or Subclasses
class Employee extends Person1{
    position:string

    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position=position
    }
}

const emp = new Employee(2, "Nancy", "Developer")
// console.log(emp.register())

// Generics
function getArray(){
    console.log(2)
}