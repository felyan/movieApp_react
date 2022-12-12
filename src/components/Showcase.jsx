import React from 'react'
import styled from 'styled-components';
import PentagonIcon from '@mui/icons-material/Pentagon';


const Showcase = () => {
    return (
    <Container>
            <Seat>
                <PentagonIcon style={{ color:'green' }} />
                Free
            </Seat>
            <Seat>
                <PentagonIcon style={{ color:'red' }} />
                Occupied
            </Seat>
    </Container>
    )
}

export default Showcase

const Container = styled.div`
    margin-top: 30px;
`
const Seat = styled.div`
    display: inline;
    padding: 0 10px;    
`