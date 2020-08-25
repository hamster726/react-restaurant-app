import {increaseCount, deleteFromCart} from "../actions";

const initialState = {
    menu: [],
    items: [],
    loading: true,
    error: false,
    summaryPrice: 0,
    orderAccepted: false

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
            const item = action.payload;

            const countOfItems = state.items.filter((elem) => elem.id === item.id);

            if (countOfItems.length > 0){
                return reducer(state, increaseCount(item.id));
            }

            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                count: item.count > 0 ? item.count + 1 : 1
            }

            const newItems = [...state.items, newItem]

            return {
                ...state,
                items: newItems,
                summaryPrice: updateSummaryPrice(newItems)


            }
        case 'ITEM_REMOVE_FROM_CART' : {
            const idx = action.payload;
            const newItems = state.items.filter(elem => elem.id !== idx);

            return {
                ...state,
                items: newItems,
                summaryPrice: updateSummaryPrice(newItems)
            }
        }

        case 'ITEM_INCREASE_COUNT' : {
            const id = action.payload;
            const updatedItems = state.items.map((item) => {
                if (+item.id === +id) {
                    item.count += 1;
                }
                return item;
            });

            console.log('items');
            console.log(state.items);
            console.log('updated items')
            console.log(updatedItems);
            return {
                ...state,
                items: updatedItems,
                summaryPrice: updateSummaryPrice(updatedItems)
            }
        }

        case 'ITEM_DECREASE_COUNT' : {
            const id = action.payload;
            let icZero = false;

            const updatedItems = state.items.map((item) => {
                if (+item.id === +id) {
                    item.count -= 1;
                    if (item.count === 0) icZero = true;
                }
                return item;
            });

            if(icZero) {
                return reducer(state, deleteFromCart(id));
            } else {
                return {
                    ...state,
                    items: updatedItems,
                    summaryPrice: updateSummaryPrice(updatedItems)
                }
            }

        }
        case 'ORDER_ACCEPTED': {
            return {
                ...state,
                orderAccepted: action.payload,
            }
        }
        default:
            return state;
    }
}

const updateSummaryPrice = (items) => {

    const sum = items.reduce((price, item) => {
        return price + item.price * item.count
    }, 0);

    return sum;
}

export default reducer;
