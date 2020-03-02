/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        image: 'https://static01.nyt.com/images/2016/05/15/opinion/sunday/15balcombe/15balcombe-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        length:"52 ft",
        location:'cumberland river',
        food: ["algae", "crustaceans"],
        Species: 'Longtooth Barracud'
    },
    {
        name: "Betty",
        image: 'https://dtmag.com/wp-content/uploads/2019/06/mandarinfish-1050x700.jpg',
        length:"25 ft",
        location:'cumberland river',
        food: ["algae", "crustaceans"],
        Species: 'Longtooth Barracud'
    },
    {
        name: "Nemo",
        image: 'https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png',
        length:"42 ft",
        location:'hatta river',
        food: ["algae", "sama"],
        Species: 'Longtooth Barracud'
    },
    {
        name: "Dory",
        image: 'https://www.montereybayaquarium.org/-/m/images/animal-guide/fishes/garibaldi.jpg?bc=white&h=749&mh=916&mw=1222&w=997&usecustomfunctions=1&cropx=9&cropy=18',
        length:"24 ft",
        location:'lombe river',
        food: ["algae", "dember"],
        Species: 'shsah Barracud'
    },
    {
        name: "Nat",
        image: 'https://thumbs-prod.si-cdn.com/n7Z82GD9Eav_CtpnzizNo66-dKc=/420x240/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
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