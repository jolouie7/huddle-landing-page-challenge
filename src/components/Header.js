import React from 'react';
import Theme from "../styles/Theme";
import { Wrapper, Title, Description, CallToAction, Image } from "../styles/HeaderStyles";
import headerImage from "../images/illustration-mockups.svg"

const Header = () => {
  return (
    <div>
      <Theme>
        <Wrapper>
          <Title>Build The Community Your Fans Will Love</Title>
          <Description>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </Description>
          <div>
            <CallToAction>Get Started For Free</CallToAction>
          </div>
          <div>
            <Image src={headerImage} />
          </div>
        </Wrapper>
      </Theme>
    </div>
  );
}

export default Header

// ! Figure out how to add background image with Styled Components