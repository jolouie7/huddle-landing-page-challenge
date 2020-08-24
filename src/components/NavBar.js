import React from "react";
import logo from "../images/logo.svg";
import { Wrapper, Logo, TryFree, BtnContainer } from "../styles/NavBarStyles";
import Theme from "../styles/Theme";

const NavBar = () => {
  return (
    <div>
      <Theme>
        <Wrapper>
          <Logo src={logo} />
          {/* <BtnContainer> */}
            <TryFree>Try It Free</TryFree>
          {/* </BtnContainer> */}
        </Wrapper>
      </Theme>
    </div>
  );
};

export default NavBar;
