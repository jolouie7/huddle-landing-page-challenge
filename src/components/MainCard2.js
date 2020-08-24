import React from 'react';
import {Wrapper, Title, Description, Image} from "../styles/MainCardStyles";
import cardImage from "../images/illustration-flowing-conversation.svg";

const MainCard = () => {
  return (
    <div>
      <Wrapper>
        <Image src={cardImage}/>
        <Title>Flowing Conversations</Title>
        <Description>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </Description>
      </Wrapper>
    </div>
  );
}

export default MainCard

// * In the future create a container component that hold a object full of data
// * Then loop through the data to generate cards