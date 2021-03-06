import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";

const CustomTextField = muiStyled(TextField)({
  width: "100%",
});
const CustomButton = muiStyled(Button)({
  backgroundColor: "black",
  width: "100%",
  fontSize: "28px",
  fontWeight: 400,
  height: "60px",
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
const ButtonWrapper = styled.div`
  margin-top: 8%;
  width: 100%;
`;

const LoginForm = () => {
  const router = useRouter();
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const signIn = () => {
    axios
      .post("http://146.56.129.188:8081/login", {
        id: id,
        pw: pw,
      })
      .then((res) => {
        console.log(res);
        alert("Login Success");
        router.push("/main");
      })
      .catch((e) => {
        console.log(e);
        alert("Login Fail");
      });
  };
  return (
    <div>
      <Title>로그인</Title>
      <RowWrapper>
        <CustomTextField
          id="outlined-basic"
          label="ID"
          variant="outlined"
          onChange={(e) => {
            setID(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              signIn();
            }
          }}
        />
      </RowWrapper>
      <RowWrapper>
        <CustomTextField
          id="outlined-basic"
          label="PW"
          type="password"
          variant="outlined"
          onChange={(e) => {
            setPW(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              signIn();
            }
          }}
        />
      </RowWrapper>
      <ButtonWrapper>
        <CustomButton variant="contained" disableElevation onClick={signIn}>
          로그인
        </CustomButton>
      </ButtonWrapper>
    </div>
  );
};
export default LoginForm;
