import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid black;
  border-color: transparent;
  border-radius: 15px;
  margin: 2rem 1rem;
  box-shadow: 1px 2px 10px rgba(0,0,0,0.2);
  padding: 2rem;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 2rem 5rem;
  }
`

export const Image = styled.img`
  max-width: 100%;
`

export const ImageContainer = styled.div`
  @media (min-width: 1440px) {
    grid-column: 9/13;
  }
`

export const TextContainer = styled.div`
  @media (min-width: 1440px) {
    grid-column: 2/7;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
  }
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts[0]};
  color: ${props => props.theme.colors.veryDarkCyan};
  white-space: nowrap;

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`

export const Description = styled.p`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.body.fontSize};
  color: ${props => props.theme.colors.grayishBlue};
  font-size: 1rem;

  @media (min-width: 1440px) {
    line-height: 25px;
  }
`

// For the middle card - swap the img position with text position
// There has to be a better way to do this
export const Card2ImageContainer = styled.div`
  @media (min-width: 1440px) {
    grid-column: 1/5;
  }
`;

export const Card2TextContainer = styled.div`
  @media (min-width: 1440px) {
    grid-column: 7/12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
  }
`