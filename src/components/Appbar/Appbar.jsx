import styled from 'styled-components'
import React from 'react'

import Basket from '../Basket/Basket'
import Row from '../Layouts/Row'

const Appbar = () =>(
    <AppbarContainer>
        <Row align="space-between" margin="0 10px">
            <h1>React-Ecom</h1>
            <Basket noItems={0}/>
        </Row>
    </AppbarContainer>
)
export default Appbar

export const AppbarContainer = styled.header`
    
    position:fixed;
    top:0;
    left:0;
    right:0;

    width:100%;
    min-height:50px;

    padding:0;
    margin:0;

    background: #333;
`