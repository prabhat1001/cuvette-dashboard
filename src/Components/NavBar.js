import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Container>
        <Logo><img src="/images/logo.png" alt="logo" /></Logo>
        <User>
            <img src="/images/user.jpeg" alt="user" />
            <span> Prabhat Kumar</span>
        </User>
    </Container>
  )
}

const Container = styled.div`
    height: 80px;
    background-color: #fff;
    border: #EBF0F5 2px solid;
    display: flex;
    /* position: fixed; */
`;

const Logo = styled.div`
    width: 120px;
    height: 40px;
    margin-top: 20px;
    margin-left: 30px;

`;

const User = styled.div`
    width: 160px;
    height: 40px;
    margin-top: 20px;
    margin-left: 30px;
    border: #EBF0F5 1px solid;
    border-radius: 10px;
    display: flex;
    position: absolute;
    right: 30px;

    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-top: 4px;
        margin-left: 5px;
    }

    span{
        margin-top: 10px;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 700;

    }
`;

export default NavBar