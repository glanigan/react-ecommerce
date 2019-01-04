import styled from 'styled-components'
import React from 'react'
import {connect} from 'react-redux'

import Basket from '../Basket/Basket'
import Row from '../Layouts/Row'

const Appbar = ({basket}) =>(
    <AppbarContainer>
        <Row align="space-between" margin="10px">
            <h1>React-ECOM</h1>
            <Basket {...basket}/>
        </Row>
    </AppbarContainer>
)
const mapStateToProps = (state) =>({
    basket: state.basket
})
export default connect(mapStateToProps,null)(Appbar)

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