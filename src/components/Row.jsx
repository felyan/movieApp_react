import React, {useState} from 'react'
import styled from 'styled-components';
import PentagonIcon from '@mui/icons-material/Pentagon';

const Row = () => {
    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const [color, setColor] = useState('green')

  return (
    <Container>
        {
            seats.map(seat=><Seat key="index" ><PentagonIcon key="index" style={{ color }} onClick={()=>setColor('red')} /></Seat>)                
        }
    </Container>
  )
}

export default Row

const Container = styled.div`
    width: 100%;
`
const Seat = styled.div`
    display: inline;
    padding: 0 3px;    
`