import React from "react";
import logo from "../images/logo.svg";
import { Wrapper, Logo, TryFree, BtnContainer } from "../styles/NavBarStyles"

const NavBar = () => {
  return (
    <div>
      <Wrapper>
        <Logo src={logo} />
        <BtnContainer>
          <TryFree>Try It Free</TryFree>
        </BtnContainer>
      </Wrapper>
    </div>
  );
};

export default NavBar;
