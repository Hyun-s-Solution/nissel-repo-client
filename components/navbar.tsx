import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  width: 100%;
  height: 100px;
`;
const NavBar = ({ children }: any) => {
  return <Nav>{children}</Nav>;
};

export default NavBar;
