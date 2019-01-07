import React, {Component} from 'react'
import styled from 'styled-components'

import {Icon} from '../Icon/Icon'
import Column from '../Layouts/Column'
import Row from '../Layouts/Row'

import {BasketItem} from './BasketItem'

const Badge = styled.span`
    position:relative;
    top:0px;
    left:18px;

    width:15px;
    height:15px;
    padding:2px 0 0 0;
    margin:0;
    
    border-radius:50%;
    background:${props => props.highlight ? 'orange':'#fff'};

    font-size:0.8em;
    text-align:center;
`

class Basket extends Component{
    state={
        showBasket: false,
    }

    componentDidMount(){
        document.addEventListener('scroll',this.hideBasket)
        document.addEventListener('mousedown',this.hideBasket)
    }
    componentWillUnmount(){
        document.removeEventListner('scroll',this.hideBasket)
        document.addEventListener('mousedown',this.hideBasket)
    }

    toggleHover = () => this.setState(prevState =>({
        hover:!prevState.hover
    }))
    
    toggleBasket = () => this.setState(prevState =>({
        showBasket: !prevState.showBasket
    }))

    hideBasket = (event) => {
        if(this.node.contains(event.target)) return;
        this.setState({
            showBasket: false,
        })
    }

    render(){
        const {noItems} = this.props
        const {showBasket,hover} = this.state
        return(
            <div ref={node => this.node = node}>
                <Column
                    onClick={this.toggleBasket}
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                    margin ="0 20px"
                    style={{cursor:'pointer'}}
                >
                    <Badge highlight={hover || showBasket}>{noItems}</Badge>
                    <Icon type="basket" size="1.4em" color={(hover || showBasket) ?'orange': '#fff'}/>
                </Column>
                <BasketMenu show={showBasket} {...this.props}/>
            </div>
        )
    }
}
export default Basket

const BasketMenuContainer = styled(Column)`
    position:absolute;
    top:60px;
    right:20px;

    width:300px;
    align-items:center;

    padding:15px 0;

    background:#fff;
    border-top: solid 8px #fdaf1c;
    box-shadow: 0px 2px 6px #888;

    opacity: ${props => props.show ? '1' : '0'};
    transition: opacity 0.5s;
    
    @media screen and (max-width:500px){
        left:0;
        right:0;

        width:100%;
        min-width:100%;

    }
`
const BasketMenu = ({show,items,noItems = 0,totalCost = 0.00}) =>(
    <BasketMenuContainer show={show}>
        <h4>{`${noItems} Item in Basket`}</h4>
        { noItems !==0 
        ? (
            <Column align="flex-start">
            { items.map(item => <BasketItem key={item.id} {...item}/>)}
            </Column>
        )
        : <h4>Your Basket is Empty <span role="img" aria-label="Sad face">&#128532;</span></h4> }
        <h4>{`TOTAL COST: £${totalCost}`}</h4>
        <Row>
            <button>VIEW / EDIT BASKET</button>
            <button>CHECKOUT</button>
        </Row>
    </BasketMenuContainer>
)