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


//* Destructuración

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

//? syntaxis
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



//* Destructuración en Arrays

const myTopFavouriteBooks = [ "Harry Potter", "Discworld", "Dresden Files", "LotR", "Dragonlance", "Star Wars" ]

// console.log( `Mis libros favoritos son: ${myTopFavouriteBooks[0]}, ${myTopFavouriteBooks[1]}, ${myTopFavouriteBooks[2]}, ${myTopFavouriteBooks[3]} y ${myTopFavouriteBooks[4]} ` )

const [ book1, book2, book3, book4, book5, book6 = "patata" ] = myTopFavouriteBooks
// extraemos es el valor EN ORDEN del array, y agregamos el nombre de una variable

// book6 = "patata" // Está asignando un valor predeterminado en caso de que el valor no exista

console.log(book1)
console.log( `Mis libros favoritos son: ${book1}, ${book2}, ${book3}, ${book4} y ${book5} ` )


console.log(book6)


//* Destructuración compleja



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


//? syntaxis
// const { *propiedadObj*: { *propiedad anidada* } } = *objeto padre*



//* Actividad 3

// Given the object, use function parameter destructuring to get the following output:

const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk'
};

// destructure the object in the parameters itself
function getIngredients( { leaf, veggie, seed, nut, liquid } ) {
  // const { leaf, veggie, seed, nut, liquid } = obj

  return `To make the green smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
}

// ensure you pass the object as a parameter while calling the function below
console.log( getIngredients( greenSmoothie ) )

// => expected Output: 
// To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.




//* Operador Spread (...) => Esparcir


const someNumbers = [ 10, 20, 100, 8, 14 ]

console.log( someNumbers )
console.log( ...someNumbers ) // esparciendo los elementos del array
console.log( 10, 20, 100, 8, 14 ) // ES LO MISMO QUE ARRIBA

// Primer uso => metodos que requieren varios valores (pero no un array)
console.log( Math.max( 1, 10, 1000, 40 ) )
console.log( Math.max( ...someNumbers ) )


// Segundo uso => clonar arrays

const numbersCopy = [...someNumbers] // nuevo array

numbersCopy.reverse()
console.log(numbersCopy)
console.log("original", someNumbers)

// Tercer uso => crear arrays con elementos de otros

const students = [ "dani", "alejandro", "jonathan" ];
const staff = [ "caro", "ruth", "clara" ]

const newArr = [ ...students, ...staff.slice(0,2), "alvaro", "santi" ]
console.log(newArr)



//* Operador REST (...) => El resto de los elementos

//* Primer uso => obtener el resto de elementos de una destructuración de arrays

const hobbies = [ "surfear", "videojuegos", "leer", "escalar", "ver pelis" ]

const [ hobby1, hobby2, ...otherHobbies ] = hobbies

console.log(hobby1, hobby2)

// quiero EL RESTO de los elementos de ese array
console.log(otherHobbies)

//* Segundo usop => obtener el resto de los argumentos pasados a una función.


// 1. Un valor total
// 2. Un valor a sumar
// 3. Otro valor a sumar

function checkAmount(total, ...allNumbers) {

  console.log(allNumbers)

  let sum = allNumbers.reduce((acc, elem) => {
    return acc + elem
  }, 0)


  if (sum === total) {
    return `la suma es exactamente ${total}`
  } else {
    return `la suma no da el total ${total}`
  }

}

console.log( checkAmount(12, 4, 8) ) 
console.log( checkAmount(15, 10, 4, 1) ) 
console.log( checkAmount(20, 2, 2, 2, 2, 2, 9) ) 


