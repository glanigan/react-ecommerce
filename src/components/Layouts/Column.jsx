import styled from 'styled-components'

const Column = styled.div`
    display:flex;
    flex-direction:column;
    align-items:${props => props.align};

    margin: ${props => props.margin};
`
export default Column