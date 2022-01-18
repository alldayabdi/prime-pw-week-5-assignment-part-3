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
console.log(addtoCollection());

const collection0 = console.log(addtoCollection('Gunna', 'DS4', 2022));
const collection1 = console.log(addtoCollection('Drake', 'Scorpion', 2018));
const collection2 = console.log(addtoCollection('Lil Baby', 'Harder than Ever', 2017));
const collection3 = console.log(addtoCollection('Meek Mill','Championship', 2016));
const collection4 = console.log(addtoCollection('Drake',  'IYRTITL', 2014));
const collection5 = console.log(addtoCollection('Future', 'Hendrxx', 2018)); //Create collections with their respective artists
