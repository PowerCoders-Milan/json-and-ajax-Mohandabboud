fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => response.json())
  .then( data =>  {
                    var body = document.querySelector("body");
                    var p = document.createElement("p");
                    var p1 = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    p.innerHTML = "the email is " + data.email;
                    p1.innerHTML = "the id is " + data.id;
                    p2.innerHTML = "the name is " + data.name  ;
                    p3.innerHTML = "the phone number is " + data.phone ; 
                    body.appendChild(p);
                    body.appendChild(p1);
                    body.appendChild(p2);
                    body.appendChild(p3);
                    console.log(p);
                    console.log(p1);
                    console.log(p2);
                    console.log(p3);
                   })



fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body : JSON.stringify({
        name: 'Michel',
        email : 'michel@gg.net',
        address : {
            'street' : 'Douglas Extension',
            'suite': 'Suitep 7847',
            'city': "McKenziehavencd",
            'zipcode': '595900-41517', 
        },
        userId: 1,
        phone: '00555',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
    .then((response) => response.json())
    .then((data) => {
        var body = document.querySelector("body");
        var p = document.createElement("p");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        p.innerHTML = "the email is " + data.email;
        p1.innerHTML = "the userId is " + data.userId;
        p2.innerHTML = "the name is " + data.name  ;
        p3.innerHTML = "the phone number is " + data.phone ; 
        body.appendChild(p);
        body.appendChild(p1);
        body.appendChild(p2);
        body.appendChild(p3);
        console.log(p);
        console.log(p1);
        console.log(p2);
        console.log(p3);
       });


    fetch('https://jsonplaceholder.typicode.com/users/3', {
        method: 'PUT',
        body: JSON.stringify({
          id: 3,
          name: "Clementine ",
          phone: "1-463-123-47",
          username: "Samant",
          website: "ramiro.in",
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            var body = document.querySelector("body");
            var p = document.createElement("p");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            p.innerHTML = "the website is " + data.website;
            p1.innerHTML = "the username is " + data.username;
            p2.innerHTML = "the name is " + data.name  ;
            p3.innerHTML = "the phone number is " + data.phone ; 
            body.appendChild(p);
            body.appendChild(p1);
            body.appendChild(p2);
            body.appendChild(p3);
            console.log(p);
            console.log(p1);
            console.log(p2);
            console.log(p3);
           });
      
        fetch('https://jsonplaceholder.typicode.com/users/3', {
            method: 'DELETE',
          })  
          .then((response) => console.log(response))
          

  /*
  
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}); */