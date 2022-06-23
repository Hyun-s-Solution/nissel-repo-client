import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { styled as muiStyled } from "@mui/system";
import * as logo from "../../asset/jh_masked.jpg";

const image = logo.default;

const CustomTextField = muiStyled(TextField)({
  width: "100%",
});

const Title = styled.div`
  color: black;
  font-size: 32px;
  font-weight: 700;
  margin-top: 28px;
  margin-bottom: 28px;
`;
const RowWrapper = styled.div`
  margin-bottom: 4%;
  width: 100%;
`;
const Logo = styled.img`
  margin-top: 5%;
  max-width: 50%;
  height: auto;
`;
const LoginForm = () => {
  return (
    <div>
      <Logo src={image} alt="logo"></Logo>
      <Title>로그인</Title>
      <RowWrapper>
        <CustomTextField id="outlined-basic" label="ID" variant="outlined" />
      </RowWrapper>
      <RowWrapper>
        <CustomTextField id="outlined-basic" label="PW" variant="outlined" />
      </RowWrapper>
    </div>
  );
};
export default LoginForm;
