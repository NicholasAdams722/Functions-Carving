const createWoodBlock = () => {
    // Return an object with 4 properties.
    return woodObject= {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    
}

const createBeautifulCarving = (woodObject) =>{
    // Return a string representation of the object
    const stringRepresentation = `The ${woodObject.length}-inch, ${woodObject.material} woodblock was carved into a wooden ${woodObject.purpose}`
    
    return stringRepresentation
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.


//In the createBeautifulCarving function, return a string that looks like the following template.

//"The 10-inch, pine woodblock was carved into a wooden flute"


console.log(carvingString)
