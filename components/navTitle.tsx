import styled from "styled-components";

const NavTitleStyled = styled.div`
  color: white;
  font-size: 32px;
  font-weight: 500;
  padding-left: 2%;
`;
const NavTitle = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <NavTitleStyled>Hyun&apos;s Container</NavTitleStyled>
    </div>
  );
};

export default NavTitle;
