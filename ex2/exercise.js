fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
                    var body = document.querySelector("body");
                    var p = document.createElement("p");
                    var p1 = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    p.innerHTML = "the title is " + data.title;
                    p1.innerHTML = "the id is " + data.id;
                    p2.innerHTML = "the userId is " + data.userId  ;
                    p3.innerHTML = "is it completed " + data.completed ; 
                    body.appendChild(p);
                    body.appendChild(p1);
                    body.appendChild(p2);
                    body.appendChild(p3);
                    console.log(p);
                    console.log(p1);
                    console.log(p2);
                    console.log(p3);
                });

  
