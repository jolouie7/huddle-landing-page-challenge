import React from 'react';
import {
  Wrapper,
  FooterCardContainer,
  FooterContainer,
  FirstFooterCol,
  IconTextContainer,
  LogoContainer,
  Logo,
  FooterText,
  InfoList,
  AllListItems,
  InfoDetail,
  First3InfoDetail,
  Second3InfoDetail,
  Icon,
  MediaIconBorder,
  SocialContainer,
  MediaIconContainer,
  Copyright,
} from "../styles/FooterStyles";
import logoImage from "../images/logo.svg";
import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <Wrapper>
      <FooterCardContainer>
        <FooterCard />
      </FooterCardContainer>
      <LogoContainer>
        <Logo src={logoImage} />
      </LogoContainer>
      <FooterContainer>
        <div style={{display: "inline"}}>
          <IconTextContainer>
            <img
              src={locationIcon}
              alt="location icon"
              style={{ color: "white", width: "auto" }}
            />
            <FooterText>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed do <br />
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua
            </FooterText>
          </IconTextContainer>
          <IconTextContainer>
            <img src={phoneIcon} alt="phone icon" style={{ color: "white" }} />
            <FooterText>+1-543-123-4567</FooterText>
          </IconTextContainer>
          <IconTextContainer>
            <img src={emailIcon} alt="email icon" style={{ color: "white" }} />
            <FooterText>example@huddle.com</FooterText>
          </IconTextContainer>
        </div>
        <InfoList>
          <AllListItems>
            <InfoDetail>About Us</InfoDetail>
            <InfoDetail>What We Do</InfoDetail>
            <InfoDetail>FAQ</InfoDetail>
          </AllListItems>
          <AllListItems>
            <InfoDetail>Career</InfoDetail>
            <InfoDetail>Blog</InfoDetail>
            <InfoDetail>Contact Us</InfoDetail>
          </AllListItems>
        </InfoList>
        <SocialContainer>
          <MediaIconContainer>
            <FaFacebookF
              style={{
                border: "1px white solid",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </MediaIconContainer>
          <MediaIconContainer>
            <FaTwitter
              style={{
                border: "1px white solid",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </MediaIconContainer>
          <MediaIconContainer>
            <FaInstagram
              style={{
                border: "1px white solid",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </MediaIconContainer>
        </SocialContainer>
        <Copyright>
          &copy; Copyright 2018 Huddle. All rights reserved.
        </Copyright>
      </FooterContainer>
    </Wrapper>
  );
}

export default Footer
