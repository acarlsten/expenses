import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)
const db = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, db as default }

/* db.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val())
})

db.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val())
})

db.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val())
})

// db.ref('expenses').on('value', snapshot => {
//   const expenses = []

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses)
// })

// db.ref('expenses').push({
//   description: 'first one',
//   note: '',
//   amount: 123,
//   createdAt: 0
// })

// db.ref('notes').push({
//   title: 'blaba',
//   body: 'flortpw'
// })

/* const onValueChange = db.ref().on(
  'value',
  snapshot => {
    const data = snapshot.val()
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}!`)
  },
  e => {
    console.log('Error with data fetching', e)
  }
) */

/* db.ref('location')
  .once('value')
  .then(snapshot => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch(e => {
    console.log('Error fetching data!', e)
  }) */

/* db.ref()
  .set({
    name: 'Adde',
    age: 29,
    stressLevel: 3,
    job: {
      title: 'Kundsupport',
      company: 'Gleerups'
    },
    isAwake: true,
    location: {
      city: 'Malmö',
      country: 'Sweden'
    }
  })
  .then(() => {
    console.log('Data saved!')
  })
  .catch(e => console.log(e))

db.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
}) */
