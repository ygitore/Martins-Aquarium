const Location = (locationObject) => {
    return `
        <div class = "location">
            <div>Country:${locationObject.Country}</div>
            <div>City: ${locationObject.City}</div>
            <div>River: ${locationObject.River}</div>
        </div>
    `
}
export default Location