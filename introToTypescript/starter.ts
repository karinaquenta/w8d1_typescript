//Declaring

//let anyType

let stringType:string

let numberType:number

let booleanType:boolean

let objectType:object

let typeNull:null

let undefinedType:undefined

let arrayType:string[]

//arrayType.push('10') //see line 38

//anytype to any type of variable

stringType = 'hello world'

//class ex: create 3 variables with data type strings, number bool: iceString,iceBoolean,iceNumber, then assign
//a value on a later line
let iceString:string
let iceBoolean:boolean
let iceNumber:number

iceString='hello world'
iceBoolean=true
iceNumber=5
//implicit type declration
let stringVar='matrix'
stringVar='new string' 
console.log(stringVar)
//decalrin var As a array
const stringArray = ['1','2','3']

let numVar = 10
numVar += 2

let numArray:number[]
numArray = [1,2,3]

//one declare an array which will filled with null
//assign value of array with

// const nullArray:[null]
// nullArray = [5,'6']

let newString:string;
let undefinedVar: undefined
let mixedArray: [string, number, number, string]

mixedArray = ['12',4,5,'string']

let anyArray : any[]

anyArray = [1,'12', {a:1},[12]]

let mixedArray2: [string,string, ...number[]]

mixedArray2 = ['12','matrix',1,10]
console.log(mixedArray2)
//class ex 2-create an array with one number, any numver of booleans array name stringBoolArray

let stringBooleanArray: [number, ...boolean[]]= [5,true,false,]

function lowerCaseName(name:string){
    name = name.toLowerCase()
    return name
}

function nameLength(name:string){
    return name.length
}

// console.log(nameLength('sean').length)
//
function lowerCaseName2(name):string{
    name = name.toLowerCase()
    return name
}

lowerCaseName2('sean').length

//ICE: create a function which takes in 2 parameters(both #s)
//return a string ex: <firstNumber> plus <secondNumber> equals <num1+num2>

function addNum(num1:number, num2:number):string{
    let finalNum = num1 + num2
    return `${num1} plus ${num2} equals ${finalNum}` //template literal
}

console.log(addNum(5,7))

//return upper case name
//how a const function is set up
const upperName = (name:string):string=>{
    return name.toUpperCase()
}
upperName('sean').length

const hisName = (name:string, age:number):string=>{
    return `${name} is ${age} years old`
}
console.log(hisName('sean', 21).length) //make sure this is right
//
function greetings(name:string):void{ //not working
    console.log('Hello', name)
}

//ICE:create an arrow function that is going to console log (your favorite joke or anything)explicitly has a void data type
// const jokeFunction = (joke:string):void =>{
//     console.log(jokeFunction)
// }
// jokeFunction('Guess what, chicken butt')
//
let myTuple:[number, string]

myTuple = [3,'hi']
myTuple.push('astring')

console.log(myTuple)

//ICE: first elemet, true, 2nd value undefined, tuple output: [true, undefined]
let myTupe : [boolean, undefined]= [true, undefined]
myTupe = [true, undefined]
console.log(myTupe)
// run to 148
function anyP(person:any){
    person.talk()
}
class Person{
    talk(){
        console.log('I have something to say')
    }
}

function unknownP(person:unknown){
    if (person instanceof Person){
        person.talk()
    }
}
let person = new Person()
unknownP(person)
//ICE: create a function that takes in an unknown parameter, implement a type guard
//if param == number then square num
//if string return upperCase
//if bool just return Boolean

function unknownParam(data:unknown){
    if(typeof data === 'number'){
        return data**2
    }
    else if(typeof data === 'string'){
        return data.toUpperCase()
    }
    else if(typeof data === 'boolean'){
        return data
    }
}
//
console.log(unknownParam(8))

function anyParam2 (data:any){
    if (typeof data === 'string'){
        data.includes('a')
    }
}
//make a student obj, have the id of 1
const student = { id:1}

//student.name = 'chris' -error
//student.id = '1 -error

const studentB={ //really its studen2, unable to clear hw errors
    id:2,
    name:'chris'
}
//update value
student2.name ='christopher'

const studentC : { //really its studen3, unable to clear hw errors
    id: number,
    name:string
} = {
    id:3,
    name:'karina'
}

let student4 : {
    id:number,
    name:string
}
student4 = {
    id:5,
    name:'vinh'
}
//ICE:create an object that has 3 key value pairs :
//id = #
//name=string
//wasfrozen=boolean
//works, let will let you assign the value later const won†
const iceFunction:{
    id:number,
    name:string,
    wasFrozen:boolean
}={
    id: 6,
    name: 'tom',
    wasFrozen:true
}
console.log(iceFunction)
//
const student5 : {
    readonly id:number,
    name:string
}={
    id: 5,
    name:'gian'
}
//student5.id = 10 -error bcuz its read only

type Student = {
    readonly id:number,
    name:string
}
const students6:Student = {
    id : 10,
    name:'allen'
}
//students6.id = 11
//
type StudentInfo = {
    readonly id:number,
    name:string,
    email? : string
}

let student7 : StudentInfo
let student8 : StudentInfo

student7 = {
    id:12,
    name:'andy'
}

student8 = {
    id:13,
    email:'khoa@gmail.com',
    name:'khoa'
}

console.log(student7.email)
//to add email
student7.email = 'andy@gmail.com'
//to line 276
type StudentMethod = {
    readonly id: number,
    name: string,
    email?:string,
    sayHello:(school:string)=>string
}

const student9:StudentMethod = {
    id:12,
    name: 'david',
    sayHello:(school:string):string=>{
        return `We are going to ${school}`
    }
}

console.log(student9.sayHello('Coding Temple'))
//
//ICE: type-IceShopeType
//create an instant of type
//readonly id
//size : number
//name:string
//Desc:string -not optional
//optionValue wideShoe :boolean

type IceShopeType ={
    readonly id: number,
    size: number,
    name:string,
    description: string,
    wide?:boolean
}
const type1: IceShopeType = {
    id:3,
    size: 8,
    name: 'sam',
    description: 'blue',
    wide: true
}
console.log(type1)
//
//with not so concrete data
// type LooseType = {
//     name: string,
//     [key:string]: string | number //union or intersection types, is an intersection of the 2, enum portion not covered.
// }
// const randomOb:LooseType = {
//     name: 'Todd',
//     age: 24,
//     email: 'todd@gmail.com',
//     favoriteTeams:['bear', 'bulls']
// }