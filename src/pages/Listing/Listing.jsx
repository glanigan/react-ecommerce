import React from 'react'
import { connect } from 'react-redux'

import { 
    addItem as addItemToBasket,
    removeItem as removeItemFromBasket
} from '../../store/Basket'

const Listing = (props) =>{
    function add(){
        const item = {
            id:100,
            name:'Levi 401s Blue Jeans Slim Fit',
            cost: 45.00
        }
        props.addItemToBasket(item)
    }
    function remove(){
        const item = {
            id:100,
            name:'Levi 401s Blue Jeans Slim Fit',
            cost: 45.00
        }
        props.removeItemFromBasket(item)
    }
    return(
        <div>
            Listing
            <button onClick={() => add()}>Add Item</button>
            <button onClick={() => remove()}>Remove Item</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    removeItemFromBasket: (item) => dispatch(removeItemFromBasket(item))
})
export default connect(null,mapDispatchToProps)(Listing)