const initializeDetailButtonEventsPink = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close-pink")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line
    document.querySelector("#button--pink").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--pink")
            theDialog.showModal()
        }
    )

}
export default initializeDetailButtonEventsPink;