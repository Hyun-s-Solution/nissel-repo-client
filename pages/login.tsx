import type { NextPage } from "next";
import LoginWrapper from "../components/login/wrapper";
import LoginForm from "../components/login/form";

const Login: NextPage = () => {
  return (
    <>
      <LoginWrapper>
        <LoginForm></LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
