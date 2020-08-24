import styled from "styled-components";

export const Wrapper = styled.nav`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: grid;
  /* justify-content: space-between;
  justify-items: center; */
  grid-template-columns: repeat(12, 1fr);
  padding: 0 1rem;
`;

export const Logo = styled.img`
  margin-top: 15px;
  grid-column: 1/5;
  max-width: 100%
`;

export const TryFree = styled.button`
  grid-column: 9/13;
  max-width: 100%;
  color: ${props => props.theme.colors.VeryDarkCyan};
  white-space: nowrap;
  /* overflow: hidden; */
  border-radius: 50px;
  padding: 5px 15px;
  background-color: white;
  border: none;
  font-family: ${props => props.theme.fonts[0]};
  font-weight: 600;
  /* change shadow to darker color  */
  box-shadow: 2px 2px 5px #afe9ff;
  cursor: pointer;
  outline: none;
`;

export const BtnContainer = styled.div`
  /* display: flex;
  align-items: center; */
  /* justify-content: center; */
  grid-column: 8/12;
  max-width: 100%;
`;