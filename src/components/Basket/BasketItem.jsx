import React from 'react'

import Row from '../Layouts/Row'

export const BasketItem = ({name,cost}) =>(
    <Row>
        <span>{name}</span>
        <span>{cost}</span>
    </Row>
)