const Fish = (fishObject) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fishObject.image}" alt="">
            </div>
            <div class="fish__name">${fishObject.name}</div>
            <button class="fishButton" id="button--${fishObject.name}">Details</button>
            <dialog class="dialog--fish" id="details--${fishObject.name}">
                <div>Species: ${fishObject.species}</div>
                <div>Location: ${fishObject.location}</div>
                <div>Length: ${fishObject.length}</div>
                <div>Food: ${fishObject.food.join(",")}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Fish