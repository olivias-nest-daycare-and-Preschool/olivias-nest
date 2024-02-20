import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2.5rem;
  color: #7e91ae;
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: grey;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FooterLogo = styled.div`
  margin-right: 0rem;
  font-weight: bold;
  img {
    height: 9rem;
    width: auto;
    border-radius: 50%;
    display: block;
    margin: 1.5rem 0;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  &:last-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    a {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
`;

export const DeveloperInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 0.8rem;
  color: black;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CopyRightInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 0.8rem;
  color: black;
`;
