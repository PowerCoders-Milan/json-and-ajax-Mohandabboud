

var promise4 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then( data => { console.log(data)
        if (data.id === 1 ) {
            resolve('Stuff worked')
          } else {
            reject('Error, it broke')
          }
    })
})

// promise1.then(result => console.log(result));
    
var promise5 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then( data => { 
        if (data.completed === false ) {
            resolve('Stuff worked')
          } else {
            reject('Error, it broke')
          }
    })
})

// promise2.then(result => console.log(result));

var promise6 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then( data => { 
        if (data.userId === 1 ) {
            resolve('Stuff worked')
          } else {
            reject('Error, it broke')
          }
    })
})

 // promise3.then(result => console.log(result));

  Promise.all([promise4, promise5, promise6])
  .then((result) => console.log(result))




/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data =>  object = data )
.then(data => console.log(data))
.then(data => console.log(object))
.then(data => console.log("this is the object" + object))
.then(data =>
        Promise.all([promise1, promise2, promise3])
        .then(result => console.log(result))
        .catch(error => console.log(`Error in promises ${error}`)))
*/


var promise1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then( data => { console.log(data)
        if (data.id === 3 ) {
            resolve('Stuff worked')
          } else {
            reject('Error, it broke')
          }
    })
})

//promise1.then(result => console.log(result));

var promise2 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then( data => {
        if (data.name === "Clementine Bauch" ) {
            resolve('Stuff worked')
          } else {
            reject('Error, it broke')
          }
    })
})

var promise3 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
    .then( data => {
        if (data.username === "Samantha" ) {
            resolve('Stuff worked')
          } else {
            reject('Error, it broke')
          }
    })
})

Promise.all([promise1, promise2, promise3])
.then((result) => console.log(result))

