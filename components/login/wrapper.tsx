import styled from "styled-components";

const Positioner = styled.div`
  min-height: 100vh;
  max-width: 450px;
  margin: 0 auto -236px;
  margin-top: 7%;
`;
const Box = styled.div`
  padding: 5% 5% 5%;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 32% / 70%);
  min-height: 660px;
`;

const LoginWrapper = ({ children }: any) => {
  return (
    <Positioner>
      <Box>{children}</Box>
    </Positioner>
  );
};

export default LoginWrapper;
