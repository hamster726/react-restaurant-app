const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (item) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: item
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const increaseCount = (id) => {
    return {
        type : 'ITEM_INCREASE_COUNT',
        payload: id
    }
}

const decreaseCount = (id) => {
    return {
        type : 'ITEM_DECREASE_COUNT',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    increaseCount,
    decreaseCount
};
