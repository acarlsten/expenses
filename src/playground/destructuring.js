// const person = {
//   name: 'Adam',
//   age: 28,
//   location: {
//     city: 'Malmö',
//     temperature: 3
//   }
// }

// const { name = 'Fart', age } = person

// console.log(`${name} is ${age}.`)

// const { temperature: temp, city } = person.location
// console.log(`It's ${temp} in ${city}`)

// const book = {
//   title: 'Red Sister',
//   author: 'Mark Lawrence',
//   publisher: {
//     name: 'Tor'
//   }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)

// ARray

const address = ['Norra Bulltoftavägen 35', 'MALMÖ', 'SKÅNE', '21243']

const [street, city, province, postcode] = address

console.log(`You are in ${street} ${postcode}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [product, , medium] = item

console.log(`A medium ${product} costs ${medium}`)
