 //Global variables
 const divElement = document.querySelector("#dog-bar"); //this grabs the right div element
 const dogSpan = document.createElement("span"); //this creates the span
////have to go back how do we append the child span to dog-bar

 //const textNode = document.createTextNode("the json server dog name")
 //dogSpan.appendChild(textNode)
 //dogSpan.appendChild("#dog-bar")
 
 console.log(dogSpan)

 //Dogspan.id = "dogName"
 //document.body.appendChild(dogName)
 //console.log(dogName)

 //DOM Selectors

 //Fetch Function
fetch("http://localhost:3000/pups")
 .then(res => res.json())
 .then(data => console.log(data))

 //Render Function

 //Event Listeners
 document.addEventListener("click", handleClick)

 //Event Handlers
const handleClick = 

 //Initializers