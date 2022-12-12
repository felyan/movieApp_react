import React from 'react'
import Row from './Row';
import styled from 'styled-components';

const Column = () => {
    const rows = [1, 2, 3, 4, 5, 6];
    return (
    <Container>
        {
            rows.map(row=><Row key="index" />)                
        }
    </Container>
    )
}

export default Column

const Container = styled.div`
    width: 100%;
    height: auto;
    display: inline;
`