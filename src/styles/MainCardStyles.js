import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid black;
  border-color: transparent;
  border-radius: 15px;
  margin: 2rem 1rem;
  box-shadow: 1px 2px 30px rgba(0,0,0,0.2);
  padding: 2rem;
`

export const Image = styled.img`
  max-width: 100%
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts[0]};
  color: ${props => props.theme.colors.veryDarkCyan};
  white-space: nowrap;
`

export const Description = styled.p`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.body.fontSize};
  color: ${props => props.theme.colors.grayishBlue};
  font-size: 1rem;
`
