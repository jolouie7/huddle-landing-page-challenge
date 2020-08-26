import React from 'react';
import {
  Wrapper,
  Title,
  Description,
  Image,
  Card2ImageContainer,
  Card2TextContainer,
} from "../styles/MainCardStyles";
import cardImage from "../images/illustration-flowing-conversation.svg";

const MainCard = () => {
  return (
    <div>
      <Wrapper>
        <Card2ImageContainer>
          <Image src={cardImage} />
        </Card2ImageContainer>
        <Card2TextContainer>
          <Title>Flowing Conversations</Title>
          <Description>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </Description>
        </Card2TextContainer>
      </Wrapper>
    </div>
  );
}

export default MainCard

// * In the future create a container component that hold a object full of data
// * Then loop through the data to generate cards