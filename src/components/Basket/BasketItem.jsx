import React from 'react'

import Row from '../Layouts/Row'
import Column from '../Layouts/Column'

export const BasketItem = ({cover,name,cost,quantity = 1}) =>(
    <Row margin="2px 0">
        <img src={cover} alt="Product"/>
        <Column>
        <span>{name}</span>
        <span>{`£${cost.toFixed(2)}`}</span>
        <span>Quantity:{quantity}</span>
        </Column>
    </Row>
)
BasketItem.defaultProps = {
    cover: 'https://via.placeholder.com/60x80?text=Image not found'
}