const initialState = {
    items:[],
    noItems: 0,
    totalCost: 0.00
}

const actions = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
}

export const addItem = (item) => ({type: actions.ADD,payload: {item:item}})

export const removeItem = (item) => ({type: actions.REMOVE,payload: {item:item}})

//TODO
export const applyOffer = (offer) => ({})

//TODO
export const reset = () => ({})


function basketReducer(state = initialState, action){
    switch(action.type){
        case actions.ADD:
            return{
                ...state,
                items: Object.assign([...state.items,action.payload.item]),
                noItems: state.noItems + 1,
                totalCost: state.totalCost + action.payload.item.cost
            }
        case actions.REMOVE:
            return{
                ...state,
                items: Object.assign(state.items.filter((item)=>item.id!==action.payload.item.id)),
                noItems:state.noItems - 1,
                totalCost: state.items.reduce((a , b) => a.cost + b.cost,0) || 0
            }
        default:
            return state;
    }
}

export default basketReducer