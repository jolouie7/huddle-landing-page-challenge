import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.svg"

const NavBar = () => {
  const Wrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 0 2rem;
    background-color: red;
  `;

  const Logo = styled.img`
    margin: 15px;
  `;

  const TryFree = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
    color: hsl(192, 100%, 9%);
    border-radius: 50px;
    /* padding: 4px 40px; */
    padding: 1px 2px;
    background-color: white;
    border: none;
    font-family: Poppins;
    font-weight: 600;
    box-shadow: 2px 2px 5px #afe9ff;
    cursor: pointer;
    outline: none;
  `;
  
  return (
    <div>
      <Wrapper>
        <Logo src={logo} />
        <TryFree>Try It Free</TryFree>
      </Wrapper>
    </div>
  );
}

export default NavBar
