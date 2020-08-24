import styled from "styled-components";
import image from "../images/bg-hero-mobile.svg";

// ! The background image is squished
export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-image: url(${image});
  background-repeat: no-repeat;
`

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.weights[1]};
  margin: 0 15px 1rem 15px;
  color: ${props => props.theme.colors.veryDarkCyan};
  font-size: 1.6rem;
`

export const Description = styled.p`
  font-family: ${props => props.theme.fonts[1]};
  font-weight: ${props => props.theme.weights[0]};
  color: ${props => props.theme.colors.veryDarkCyan};
`

export const CallToAction = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${props => props.theme.colors.pink};
  outline: none;
  border: none;
  padding: 1rem 5rem;
  margin: 3rem 0;
  border-radius: 25px;
`

export const Image = styled.img`
  max-width: 100%
`