import React from 'react';
import styled from 'styled-components';
import Column from './Column';
//import Row from './Row';

const Auditorium = () => {

  return (
    <Container>
      <Column key="index"/>
    </Container>
  )
}

export default Auditorium

const Container = styled.div`
  width: 100%;  
  margin-top: 50px;
`