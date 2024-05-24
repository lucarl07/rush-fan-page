import styled from "styled-components";

export const FooterCont = styled.footer `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: 14rem;
  box-shadow: 0px 0px 16px var(--very-dark-grey);
  font-family: "Platypi", serif;
`;

export const FooterNav = styled.nav `
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 5rem;
  height: 4rem;
  background-color: var(--bright-red);
  list-style-type: none;
  gap: 3rem;
`;

export const MiddleBar = styled.section `
  padding: 1rem;
  height: 6rem;
  background-color: var(--very-dark-grey);
`;

export const LowerBar = styled.section `
  padding: 1rem;
  height: 4rem;
  background-color: var(--white);
`;

export const SectionLine = styled.hr `
  color: var(--white);
`