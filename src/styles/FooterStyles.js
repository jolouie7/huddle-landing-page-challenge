import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.veryDarkCyan};
  grid-row-start: 6;
  grid-row-end: 7;
  padding-top: 200px;
  position: relative;
  margin-top: 200px;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

export const FooterContainer = styled.div`
  /* grid-column: 3/10; */
  /* max-width: 100%;
  margin: 0 auto; */
  text-align: center;
`

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  filter: brightness(0) invert(1);
  padding-top: 1rem;
  margin-left: 1rem;
`

export const FooterText = styled.p`
  color: white;
  font-family: ${props => props.theme.fonts[1]};
  padding: 0 1rem;
`

export const InfoList = styled.ul`
  padding: 0;
`

export const InfoDetail = styled.li`
  font-family: ${props => props.theme.fonts[1]};
  list-style-type: none;
  color: white;
  padding: 1rem;
`

export const Icon = styled.img`
  flex-grow:0;
  flex-shrink:0;
  padding-left: 1rem;
`

export const MediaIconBorder = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 100%;
  margin: 0 5px;
`

export const MediaIconContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Copyright = styled.p`
  text-align: center;
  color: white;
  padding: 1rem 0;
`
