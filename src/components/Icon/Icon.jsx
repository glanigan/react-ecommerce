import styled from 'styled-components'

export const iconTypes = {
    'user':'fas fa-user',
    'users':'fas fa-users',
    basket:'fas fa-shopping-basket',
    'email':'far fa-envelope',
}

export const Icon = styled.i.attrs(({type}) =>({ 
    className: iconTypes[type],
}))`
    font-size:${props => props.size || '36px'};

    margin:${props => props.margin};
    color:${props => props.color || '#888'};
`;
