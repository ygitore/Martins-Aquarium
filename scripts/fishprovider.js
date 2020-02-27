/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        length:"52 ft",
        location:'cumberland river',
        food: ["algae", "crustaceans"],
        Species: 'Longtooth Barracud'
    },
    {
        name: "Betty",
        length:"25 ft",
        location:'cumberland river',
        food: ["algae", "crustaceans"],
        Species: 'Longtooth Barracud'
    },
    {
        name: "Nemo",
        length:"42 ft",
        location:'hatta river',
        food: ["algae", "sama"],
        Species: 'Longtooth Barracud'
    },
    {
        name: "Dory",
        length:"24 ft",
        location:'lombe river',
        food: ["algae", "dember"],
        Species: 'shsah Barracud'
    },
    {
        name: "Nat",
        length:"2 ft",
        location:'kule river',
        food: ["algae", "utta"],
        Species: 'matta Barracud'
    },
]


// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}