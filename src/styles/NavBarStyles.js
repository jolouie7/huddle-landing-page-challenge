import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  margin: 15px;
`;

export const TryFree = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
  color: hsl(192, 100%, 9%);
  border-radius: 50px;
  padding: 10px 35px;
  background-color: white;
  border: none;
  font-family: Poppins;
  font-weight: 600;
  /* change shadow to darker color  */
  box-shadow: 2px 2px 5px #afe9ff;
  cursor: pointer;
  outline: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;