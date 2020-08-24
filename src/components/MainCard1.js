import React from 'react';
import {Wrapper, Title, Description, Image} from "../styles/MainCardStyles";
import cardImage from "../images/illustration-grow-together.svg";

const MainCard = () => {
  return (
    <div>
      <Wrapper>
        <Image src={cardImage} />
        <Title>Grow Together</Title>
        <Description>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </Description>
      </Wrapper>
    </div>
  );
}

export default MainCard

// * In the future create a container component that hold a object full of data
// * Then loop through the data to generate cards