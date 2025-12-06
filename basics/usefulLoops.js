const movies = [
    {name:"Avengers",releaseDate:"2012",rating:"9.2"},
    {name:"Strange Things",releaseDate:"2016",rating:"8.8"},
    {name:"Bahubali",releaseDate:"2014",rating:"8.7"},
    {name:"Endgame",releaseDate:"2019",rating:"9.5"},
    {name:"F1",releaseDate:"2025",rating:"8.9"}
]
// //forEach does not return anything
// let allEntries = movies.forEach( (entry) => {
//     return entry
// })
// console.log(allEntries) //gave undefined

// allEntries = movies.filter( (entry)=>{
//     return entry
// } )
// console.log(allEntries) //returned array of those who fulfilled condition

const highlyRated = movies.filter( (item) => item.rating > 9)
console.log(highlyRated)  //filter out the conditioned values

console.log([1,2,3,4,5,6,7,8,9,10].map( (item) => item + 10)) //returns full array every time


