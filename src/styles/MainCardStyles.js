import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`

export const Image = styled.img`
  max-width: 100%
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts[0]};
  color: ${props => props.theme.colors.veryDarkCyan};
`

export const Description = styled.p`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.body.fontSize};
  color: ${props => props.theme.colors.grayishBlue};
`
