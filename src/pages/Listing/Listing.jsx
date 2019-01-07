import React from 'react'
import { connect } from 'react-redux'

import {ProductCard} from '../../components/ProductCard/ProductCard'
import Row from '../../components/Layouts/Row'

import { 
    addItem as addItemToBasket,
    removeItem as removeItemFromBasket
} from '../../store/Basket'

const Listing = (props) =>{
    return(
        <Row style={{flexWrap: 'wrap',justifyContent:'center'}}>
            {ProductList.map(item => (
                <ProductCard 
                    key={item.id} 
                    {...item} 
                    addItem={() => props.addItemToBasket(item)}
                />
            ))}
        </Row>
    )
}

const mapStateToProps = (state) => ({
    listing: state
})

const mapDispatchToProps = (dispatch) =>({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    removeItemFromBasket: (item) => dispatch(removeItemFromBasket(item))
})
export default connect(mapStateToProps,mapDispatchToProps)(Listing)



const ProductList = [
    {
        id:100,
        name:'Levi 401s Blue Jeans Slim Fit',
        cost: 45.00,
        options: [
            {name:'Size', selected:'M'},
            {name:'Colour', selected:'BLUE'},
        ],
    },
    {
        id:101,
        name:'Levi 401s Dark Jeans Slim Fit',
        cost: 48.00,
        options: [
            {name:'Size'},
            {name:'Colour'},
        ],
    },
    {
        id:102,
        name:'Levi Logo T-Shirt',
        cost: 22.00,
        options: [
            {name:'Size'},
        ],
    },
]