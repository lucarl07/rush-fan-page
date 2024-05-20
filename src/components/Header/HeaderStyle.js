import styled from "styled-components";

export const Navbar = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  width: auto;
  height: 96px;
  background-color: var(--bright-red);
  box-shadow: 0px 5px 25px var(--very-dark-grey);
`;

export const NavImg = styled.img `
  height: 64px;
`;

export const Navigation = styled.ul `
  display: inherit;
  flex-direction: inherit;
  list-style-type: none;
  gap: 3rem;
`;

export const NavItem = styled.li `
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;