import React from 'react';
import {
  Wrapper,
  Title,
  Description,
  Image,
  TextContainer,
  ImageContainer,
} from "../styles/MainCardStyles";
import cardImage from "../images/illustration-your-users.svg";

const MainCard = () => {
  return (
    <div>
      <Wrapper>
        <ImageContainer>
          <Image src={cardImage} />
        </ImageContainer>
        <TextContainer>
          <Title>Your Users</Title>
          <Description>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </Description>
        </TextContainer>
      </Wrapper>
    </div>
  );
}

export default MainCard

// * In the future create a container component that hold a object full of data
// * Then loop through the data to generate cards