import React from "react";
import Theme from "../styles/Theme";
import {
  Wrapper,
  Title,
  Description,
  CallToAction,
  ImageWrapper,
  Image,
} from "../styles/HeaderStyles";
import headerImage from "../images/illustration-mockups.svg";
import Navbar from "../components/NavBar";

const Header = () => {
  return (
    <div>
      <Theme>
        <Wrapper>
          <Navbar />
          <Title>Build The Community Your Fans Will Love</Title>
          <Description>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </Description>
          <div>
            <CallToAction>Get Started For Free</CallToAction>
          </div>
          <ImageWrapper>
            <Image src={headerImage} />
          </ImageWrapper>
        </Wrapper>
      </Theme>
    </div>
  );
};

export default Header;
