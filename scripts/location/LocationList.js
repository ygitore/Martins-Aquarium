import Location from './Location.js'
import {useFishLocation} from './LocationDataProvider.js'

const locationTarget = document.querySelector('.location-container')

const ListofLocation = () => {
    const locations = useFishLocation()
    for (const locationObject of locations) {
        const htmlRepresentation = Location(locationObject)
        locationTarget.innerHTML += htmlRepresentation
    }
}
export default ListofLocation