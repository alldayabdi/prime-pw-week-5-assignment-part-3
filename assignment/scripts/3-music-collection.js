console.log('***** Music Collection *****')
let collection = []; // declare array
function addtoCollection(name, title, datePublished) { //Create function with argument parameters
  console.log('In addtoCollection');
  const album = {};
    album.name = name;
    album.title = title;
    album.datePublished = datePublished; //Define object

  collection.push(album); // Add obj to previously created array
  return album; //Return object
}


const collection0 = new addtoCollection('Gunna', 'DS4', 2022);
const collection1 = new addtoCollection('Drake', 'Scorpion', 2018);
const collection2 = new addtoCollection('Lil Baby', 'Harder than Ever', 2017);
const collection3 = new addtoCollection('Meek Mill','Championship', 2016);
const collection4 = new addtoCollection('Drake',  'IYRTITL', 2014);
const collection5 = new addtoCollection('Future', 'Hendrxx', 2018); //Create collections with their respective artists and set its value to function

collection.push(collection0, collection1, collection2, collection3, collection4, collection5); // Add new albums to original collection

console.log(collection0);
console.log(collection1);
console.log(collection2);
console.log(collection3);
console.log(collection4);
console.log(collection5); //Testing values

console.log(collection); // Log newly updated array values

function showCollection(array) {
 console.log(`There are ${array.length} items in the array`);
 for (let i of array) { //beginning of loop
   console.log( `${i.title} by ${i.name} published in ${i.datePublished}`); //Create function to loop through array and log details
 }

}
showCollection(collection);

function findArtistName(name){ //Create function to find artist name
  let findName =[];
  for(let i =0; i<collection.length; i++){ //Beginning of loop
   if (collection[i].name === name) {
     findName.push(collection[i].name); //If statment to return results

   }
  }

  console.log(findName); // Log array

}
findArtistName('Gunna'); //Test function
