import styled from 'styled-components'
import React from 'react'

import {Icon} from '../Icon/Icon'

const CardContainer = styled.div`
    width:300px;
    height:420px;

    margin: 5px;

    box-shadow: 2px 2px 4px #aaa;
    transition: box-shadow 0.2s;

    :hover{
        box-shadow: 4px 4px 4px #aaa;
    }
`

export const ProductCard = ({id,cover,name,cost,options,addItem}) =>(
    <CardContainer>
        <div>
        <img src={cover} alt="Product" width="300" height="320"/>
        </div>
        <div style={{padding:10}}>
            <h4>{name}</h4>
            <span>{`£${cost.toFixed(2)}`}</span>
            {
                options &&
                "Item has options"
            }
            <Icon onClick={addItem} type="plus-circle" color='#fdaf1c'/>
        </div>
    </CardContainer>
)

ProductCard.defaultProps = {
    cover: 'https://via.placeholder.com/300x320/?text=Image not found',
    name: 'Product Not Found',
    cost: 0,
    options: null,
}