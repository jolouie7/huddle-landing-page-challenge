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
  top: -16%;
  background-color: white;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]};
  font-weight: ${(props) => props.theme.weights[1]};
  /* margin: 0 15px 1rem 15px; */
  color: ${(props) => props.theme.colors.veryDarkCyan};
  font-size: 1rem;
`;

export const CallToAction = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.colors.pink};
  outline: none;
  border: none;
  padding: 1rem 3rem;
  margin: 3rem 0;
  border-radius: 25px;
`;