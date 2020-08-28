import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.veryDarkCyan};
  grid-row-start: 6;
  grid-row-end: 7;
  padding-top: 200px;
  position: relative;
  margin-top: 200px;

  /* @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 100px);
  } */
`

export const FooterCardContainer = styled.div`
  text-align: center;
`

export const FooterContainer = styled.div`
  display: flex;

  @media (min-width: 1440px) {
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 5rem;
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const FirstFooterCol = styled.div`
  /* display: grid;
  grid-column: 1/2; */
  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    margin-left: 5rem;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 375px) {
    /* grid-column: 2/4; */
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1440px) {
    /* grid-column: 2/4; */
    margin-top: 1rem;
  }
`

export const LogoContainer = styled.div`
  /* grid-column: 1/5;
  grid-row: 1; */

  @media (min-width: 375px) {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1440px) {
    width: 100%;
    margin-left: 5rem;
  }
`;

export const Logo = styled.img`
  filter: brightness(0) invert(1);

  @media (min-width: 1440px) {
    /* width: 100%; */
    display: inline-block;
  }
`;

export const FooterText = styled.div`
  color: white;
  font-family: ${props => props.theme.fonts[1]};
  padding: 0 1rem;

  /* @media (min-width: 1440px) {
    padding: 0;
  } */
`

export const InfoList = styled.div`
  padding: 0;

  @media (min-width: 375px) {
    margin-top: 1rem;
  }
  @media (min-width: 1440px) {
    padding: 0;
    display: flex;
    display: inline-flex;
  }
`
export const AllListItems = styled.ul`
  padding: 0;
  @media (min-width: 375px) {
    margin-left: 20px;
  }
  @media (min-width: 1440px) {
    margin: 0 10rem 0 0;
  }
`;

export const First3InfoDetail = styled.div`
  padding: 0;

  @media (min-width: 1440px) {
    /* grid-column: 2/3; */
    /* grid-row: 1; */
    margin-left: 5rem;
  }
`

export const Second3InfoDetail = styled.div`
  padding: 0;

  @media (min-width: 1440px) {
    /* grid-column: 3/4; */
    margin-left: 5rem;
  }
`;

export const InfoDetail = styled.li`
  font-family: ${(props) => props.theme.fonts[1]};
  list-style-type: none;
  color: white;
  @media (min-width: 375px) {
    margin-top: 1rem;
  }
`;

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
  height: fit-content;

  @media (min-width: 1440px) {
    /* grid-column: 4/5; */
    grid-row: 2;
    grid-column: 4/5;
    /* content fits within the height of the container */
    height: fit-content;
    margin-top: 1rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;

  @media (min-width: 375px) {
    justify-content: center;
    margin-top: 2rem;
  }
  @media (min-width: 1440px) {
    padding-right: 75px;
    /* grid-row: 6/7; */
    /* grid-column: 4/5; */
  }
  /* grid-column: 2/3; */
`;


export const MediaIconContainer = styled.div`
  /* justify-content: center; */
  color: white;

  @media (min-width: 375px) {
    padding: 0 5px;
  }
  @media (min-width: 1440px) {
    margin-right: 1rem;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: white;
  padding: 1rem 0;

  @media (min-width: 1440px) {
    width: 100%;
    font-size: 10px;
    text-align: end;
    margin-right: 2rem;
  }
`;
