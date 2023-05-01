console.log("probando")


//* Redución de Sintaxis de Funciones


// const sayHello = (name) => {
//   return `Hola ${name}`
// }

// cuando la funcion tiene una sola linea de codigo
// 1. removemos los {}
// 2. cualquier return queda implicito

const sayHello = (name) => `Hola ${name}` 

console.log( sayHello("Caro") )


const people = ["maisha", "fátima", "carlos", "lorena", "cristina", "cecilia"]


// filtrar solo las personas que empiecen por "c"

const filteredPeople = people
.filter((eachPerson) => eachPerson[0] === "c")
.map((eachPerson) => eachPerson.toUpperCase())
.reverse()

console.log(filteredPeople)


//* Redución de Sintaxis de Objetos


let nombre = "Jorge";
let age = 28;

// const singlePerson = {
//   nombre: nombre,
//   age: age
// }

// cuando el nombre de la propiedad, es el mismo nombre de la variable de donde viene el valor:
// podemos escribirlo así:

// const singlePerson = { nombre,  age }

const singlePerson = {
  nombre,               // ! esto es tanto el nombre de la propiedad, como el lugar de donde viene el valor
  age,                  // ! esto es tanto el nombre de la propiedad, como el lugar de donde viene el valor
  likesPokemon: true
}

console.log(singlePerson)




// Destructuración

const singleDog = {
  name: "Jake",
  color: "Amarillo",
  dogAge: 10,
  breed: "Magico"
}

const otherDog = {
  name: "Phantom",
  color: "Negro",
  dogAge: 11
}

// console.log( `${singleDog.name} es un perrito de color ${singleDog.color} y tienes ${singleDog.dogAge} añitos de edad` )

// Destructuración es extraer las propiedades de un objeto como variables para facil uso.
// Destructuración NO muta el objeto original

// syntaxis
// const { *propiedades a extraer* } = *objeto donde estan las propiedades*
const { dogAge, name, color  } = singleDog
// estoy creando variables con los valores de las propiedades
console.log(name)

// console.log( `${name} es un perrito de color ${color} y tienes ${dogAge} añitos de edad` )


// const { name, color, dogAge } = otherDog


const dogMessage = (unPerrito) => {

  const { name, color, dogAge } = unPerrito;
  console.log( `${name} es un perrito de color ${color} y tienes ${dogAge} añitos de edad` )


  // const { breed } = unPerrito;

}

dogMessage(singleDog)
dogMessage(otherDog)



// Destructuración en Arrays

const myTopFavouriteBooks = [ "Harry Potter", "Discworld", "Dresden Files", "LotR", "Dragonlance", "Star Wars" ]

// console.log( `Mis libros favoritos son: ${myTopFavouriteBooks[0]}, ${myTopFavouriteBooks[1]}, ${myTopFavouriteBooks[2]}, ${myTopFavouriteBooks[3]} y ${myTopFavouriteBooks[4]} ` )

const [ book1, book2, book3, book4, book5, book6 = "patata" ] = myTopFavouriteBooks
// extraemos es el valor EN ORDEN del array, y agregamos el nombre de una variable

// book6 = "patata" // Está asignando un valor predeterminado en caso de que el valor no exista

console.log(book1)
console.log( `Mis libros favoritos son: ${book1}, ${book2}, ${book3}, ${book4} y ${book5} ` )


console.log(book6)


// Destructuración compleja



const someone = {
  firstName: "Chris",
  lastName: "Pratt",
  job: "Actor",
  other: {
    films: {
      quantity: 20,
      top: ["Guardians of the Galaxy", "Super Mario"]
    }
  }
}

console.log( someone.other.films.quantity )

// como destructurar la cantidad de pelis de Chris Pratt

// const { other } = someone;
// const { films } = other;
// const { quantity } = films;


const { other: { films: { quantity } } } = someone
console.log(quantity)

// destructurar la segunda peli de Chriss Pratt
const { other: { films: { top: [, peli2] } } } = someone
console.log(peli2)