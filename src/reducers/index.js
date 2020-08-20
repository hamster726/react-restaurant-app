
const initialState = {
    menu: [],
    items: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED' :
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED' :
            return {
                ...state,
                loading: true,
            }
        case 'MENU_ERROR' :
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'ITEM_ADD_TO_CART' :
            const id = action.payload;
            const item = state.menu.find((el)=> +el.id === +id);
            const newItem = {
                title : item.title,
                price : item.price,
                url : item.url,
                id : item.id
            }
            return {
                ...state,
                items: [
                    ...state.items, newItem
                ]

            }
        case 'ITEM_REMOVE_FROM_CART' :
            const idx = action.payload;
            const itemIndex = state.items.findIndex(elem => elem.id = idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex +1)
                ]
            }
        default:
            return state;
    }
}

export default reducer;
