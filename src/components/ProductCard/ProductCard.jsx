import styled from 'styled-components'
import React from 'react'

import {Icon} from '../Icon/Icon'

const CardContainer = styled.div`
    width:300px;
    height:400px;

    margin: 5px;

    box-shadow: 2px 2px 4px #aaa;
    transition: box-shadow 0.2s;

    :hover{
        box-shadow: 4px 4px 4px #aaa;
    }
`

export const ProductCard = ({id,cover,name,cost,options,addItem}) =>(
    <CardContainer>
        <img src={cover} alt="Product" width="300" height="200"/>
        <div>
            <h4>{name}</h4>
            <span>{`£${cost.toFixed(2)}`}</span>
            {
                options &&
                "Item has options"
            }
            <button onClick={addItem}><Icon type="plus-circle" color='#fff'/></button>
        </div>
    </CardContainer>
)

ProductCard.defaultProps = {
    cover: 'https://via.placeholder.com/300x240'
}