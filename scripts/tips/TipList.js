import Tip from './Tip.js'
import {useTips} from './TipDataProvider.js'

const contentTarget = document.querySelector('.tipList')

const tipsList = () => {
    const tips = useTips()
    for (const tipsObject of tips) {
        const htmlRepresentation = Tip(tipsObject)
        contentTarget.innerHTML += htmlRepresentation
    }
}
export default tipsList