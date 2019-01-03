import React, {Component} from 'react'
import styled from 'styled-components'

import {Icon} from '../Icon/Icon'
import Column from '../Layouts/Column'
import Row from '../Layouts/Row'

const Badge = styled.span`
    position:relative;
    top:0px;
    left:18px;

    width:15px;
    height:15px;
    padding:2px 0 0 0;
    margin:0;
    
    border-radius:50%;
    background:${props => props.hover ? 'orange':'#fff'};

    font-size:0.8em;
    text-align:center;
`

class Basket extends Component{
    state={
        showBasket: false,
    }

    componentDidMount(){
        document.addEventListener('scroll',this.hideBasket)
    }

    toggleHover = () =>{
        this.setState(prevState =>({hover:!prevState.hover}))
    }

    hideBasket = () => this.setState({
            showBasket: false,
    })

    toggleBasket = () => this.setState(prevState =>({
        showBasket: !prevState.showBasket
    }))

    render(){
        const {noItems} = this.props
        return(
            <>
            <Column
                onClick={this.toggleBasket}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                margin ="0 20px"
                style={{cursor:'pointer'}}
            >
                <Badge hover={this.state.hover}>{noItems}</Badge>
                <Icon type="basket" size="1.5em" color={this.state.hover ?'orange': '#fff'}/>
            </Column>
            <BasketMenu show={this.state.showBasket} {...this.props}/>
            </>
        )
    }
}
export default Basket

const BasketMenuContainer = styled(Column)`
    position:absolute;
    top:70px;
    right:20px;

    width:300px;
    align-items:center;

    background:#fff;
    box-shadow: 0px 2px 6px #888;

    opacity: ${props => props.show ? '1' : '0'};
    transition: opacity 0.5s;
`
const BasketMenu = ({show,noItems = 0}) =>(
    <BasketMenuContainer show={show}>
        <h4>{`${noItems} Item in Basket`}</h4>
        { noItems === 0 && <h4>Your Basket is Empty <span role="img" aria-label="Sad face">&#128532;</span></h4> }
        <Row>
            <button>View/Edit Basket</button>
            <button>Checkout</button>
        </Row>
    </BasketMenuContainer>
)