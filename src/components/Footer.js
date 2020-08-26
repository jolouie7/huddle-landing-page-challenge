import React from 'react';
import {
  Wrapper,
  IconTextContainer,
  Logo,
  FooterText,
  InfoList,
  InfoDetail,
  Icon,
  MediaIconBorder,
  MediaIconContainer,
  Copyright,
} from "../styles/FooterStyles";
import logoImage from "../images/logo.svg";
import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <Wrapper>
      <FooterCard />
      <Logo src={logoImage} />
      <IconTextContainer>
        <Icon src={locationIcon} />
        <FooterText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </FooterText>
      </IconTextContainer>
      <IconTextContainer>
        <Icon src={phoneIcon} />
        <FooterText>+1-543-123-4567</FooterText>
      </IconTextContainer>
      <IconTextContainer>
        <Icon src={emailIcon} />
        <FooterText>example@huddle.com</FooterText>
      </IconTextContainer>
      <InfoList>
        <InfoDetail>About Us</InfoDetail>
        <InfoDetail>What We Do</InfoDetail>
        <InfoDetail>FAQ</InfoDetail>
        <InfoDetail>Career</InfoDetail>
        <InfoDetail>Blog</InfoDetail>
        <InfoDetail>Contact Us</InfoDetail>
      </InfoList>
      <MediaIconContainer>
        <MediaIconBorder>
          <FaFacebookF style={{ color: "white", padding: "6px" }} />
        </MediaIconBorder>
        <MediaIconBorder>
          <FaTwitter style={{ color: "white", padding: "6px" }} />
        </MediaIconBorder>
        <MediaIconBorder>
          <FaFacebookF style={{ color: "white", padding: "6px" }} />
        </MediaIconBorder>
      </MediaIconContainer>
      <Copyright>
        &copy; Copyright 2018 Huddle. All rights reserved.
      </Copyright>
    </Wrapper>
  );
}

export default Footer
