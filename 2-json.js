/**
 * Notation : 
a series or system of written symbols used to represent numbers, amounts, or elements in something such as music or mathematics.
"algebraic notation"

a note or annotation.
"he noticed the notations in the margin"
 */ 
const user = { id:1, name: 'Amir Khan', job: 'Actor'}
// JavaScript Object Notation (JSON).
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/**
 { id: 1, name: 'Amir Khan', job: 'Actor' } // Js
{"id":1,"name":"Amir Khan","job":"Actor"}  // JSON 
 */

const shop = {
    owner: 'Alia',
    address: {
        street : 'kochukhet voot er goli',
        city : 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue :45000,
    isOpen:true,
    isNew: false
};
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopObj);
console.log(shopObj);
