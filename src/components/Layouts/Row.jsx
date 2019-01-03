import styled from 'styled-components'

const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: ${props => props.align || 'flex-start'};
    align-items: ${props => props.items || 'center'};

    margin: ${props => props.margin};
`
export default Row
