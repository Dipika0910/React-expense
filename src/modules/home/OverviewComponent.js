import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
font-family: Montserrat;
`
const BalanceBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between
`
const OverviewComponent = () => {
    return (
        <Container>
            <BalanceBox>
                Balance: $10000
            </BalanceBox>
        </Container>
    )
}
export default OverviewComponent