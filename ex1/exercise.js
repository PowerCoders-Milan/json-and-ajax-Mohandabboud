var object = { id: 1, title: "this is a note", content: "This is the amazing content of the note!" };
object.body = "note about something";
console.log(object);

let newObject = JSON.stringify(object);
const obj = JSON.parse(newObject);
console.log(obj);
for (const property in obj) {
    console.log(obj[property])
};
