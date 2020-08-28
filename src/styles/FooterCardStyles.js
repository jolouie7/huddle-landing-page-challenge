import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid black;
  border-color: transparent;
  border-radius: 15px;
  margin: 2rem 1rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem 2rem 0 2rem;
  z-index: 50;
  position: absolute;
  /* right: 0; */
  top: -15%;
  background-color: white;

  @media (min-width: 1440px) {
    padding: 2rem 10rem 0 10rem;
    left: 25%;
    right: 25%;
    top: -15%;
  }
  @media (min-width: 375px) {
    top: -20%;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]};
  font-weight: ${(props) => props.theme.weights[1]};
  /* margin: 0 15px 1rem 15px; */
  color: ${(props) => props.theme.colors.veryDarkCyan};
  font-size: 1rem;

  @media (min-width: 1440px) {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const CallToAction = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.colors.pink};
  outline: none;
  border: none;
  padding: 1rem 3rem;
  margin: 1rem 0 2rem 0;
  border-radius: 25px;
  font-family: ${(props) => props.theme.fonts[1]};

  @media (min-width) {
    padding: 1rem 4rem;
    font-size: 1rem;
  }
`;