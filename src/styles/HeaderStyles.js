import styled from "styled-components";
import image from "../images/bg-hero-mobile.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-image: url(${image})
`

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.weights[1]};
`

export const Description = styled.p`
  font-family: ${props => props.theme.fonts[1]};
  font-weight: ${props => props.theme.weights[0]};
`

export const CallToAction = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${props => props.theme.colors.pink};
  outline: none;
  border: none;
  padding: 1rem 5rem;
  border-radius: 25px;
`

export const Image = styled.img`

`