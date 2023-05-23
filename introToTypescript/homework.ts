//1. Create a type to represent the following instances of CTStudent Also declare three 3 students below as type CTStudent and set their values
//Answer

type CTStudent = {
    id:  string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted?:string[],
    pet?: string
}

const student1:CTStudent = {
    id:'GMK435&g62L00',
    name: 'John Smith',
    age:24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

const student2:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

const student3:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}


console.log(student1)

//2. Write a function that will accept a an object of type Fruit, the object of type Fruit could also be null. If their is a Fruit print the color of the fruit, otherwise print You ate my fruit already be sure to annoate the return type of the function
//Given
type Fruit={
    color:string,
    shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}


//Answer

function myFruit(fruit: Fruit | null): void {
  if (fruit !== null) {
    console.log(`The fruit color is ${fruit.color}`);
  } else {
    console.log("You ate my fruit already");
  }
}

//3. Create a Union Type named Ebook for Book and DigitalBook and create one instance of the new union type

//Answer

type Ebook = Book | DigitalBook

type Book = {
    isbn:string,
    title:string,
    author:string
}

type DigitalBook = {
    fileType:string,
}

const Book: Ebook = {
    isbn: '68eJ6yy',
    title: "Cather in the Rye",
    author: 'J.D.Salinger'
}
const DigitalBook: Ebook = {
    fileType: 'SJWGEK'
}

//4.Create a Type to represent a ShopItem that will fit the following rules.After Creating the ShopItem type create 3 items using this type.
enum Category {
    Shirts ='Shirts',
    Shoes = 'Shoes',
    Pants = 'Pants',
    Hats = 'Hats'
}


type ShopItem = {
    readonly id:number,
    price: number,
    description: string,
    color: string,
    category: Category,
    searchBy: string[]
}

const item1: ShopItem = {
    id: 8,
    price: 14.99,
    description: 'Endgame shirt',
    color: 'blue',
    category: Category.Shirts,
    searchBy: ['Endgame', 'Marvel', 'Graphic-tees']
}

const item2: ShopItem = {
    id: 5,
    price: 9.99,
    description: "Ironman hat",
    color: 'red',
    category: Category.Hats,
    searchBy: ["Ironman", "hats", "Marvel"]
}

const item3: ShopItem = {
    id: 2,
    price: 19.99,
    description: "Marvel-themed pajama pants",
    color: "green",
    category: Category.Pants,
    searchBy: ["Marvel", "pajama", "Tony Stark"]
}