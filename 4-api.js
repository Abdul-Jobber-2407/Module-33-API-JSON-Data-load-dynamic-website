 /*API = Application Programming Interface . 
 An API  acts like a link that allows two applications to talk to each other.
 API  is a part of the server that receives request and sends responses.
 ( End user > Apps in browser/ Mobile device > Request > Internet >API> web Server>Database.)
  
 => JSON : JavaScript Object Notation is an open data interchange format that is both human and machine-readable. 

 =>___________________________ JASON STRUCTURE ____________________________
  user.json 
  {
  "key": "value",
  "Key" : "value"
  }
 NB: you will have to use double quotes on key, value and  string . 

 => _____________________________________________________
 user.json
 {
 "name":"Abdul Jobber",
 "favoriteNumber": 3,
 "isProgrammer": true 
 }
__________________________JSON Parse____________________________
 JSON > parse > Object 
 _________
  ----jason------> parse
 {
 "name": "Abdul JObber",
 "age": 20,
 "salary": 75000
 }

  object: 

 {
name : "Abdul Jobber",
age: 20,
salary: 750000
}

________________________JSON Stringify_____________________
Object > Stringify > JSON 

 {
name : "Abdul Jobber",
age: 20,
salary: 750000
}
--------JSON----------
 {
 "name": "Abdul JObber",
 "age": 20,
 "salary": 75000
 }

____________________ FETCH API_________________________
The Fetch API is a modern interface that allows you to make HTTP requests to server from web browsers. 

fetch(URL) // Get the data from the url
.then(res => res.json()) // Convert the data to JavaScript object
.then (data => console.log(data)) // Display the JavaScript Object
_______________________________________________________________________
 
 */

