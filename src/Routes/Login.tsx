import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";

const LoginLayout = styled.div`
  max-width: 560px;
  margin: 150px auto;
  padding: 40px;
  background-color: #252525;
  h1 {
    margin-bottom: 40px;
    text-align: center;
    font-size: ${(props) => props.theme.size.xxl};
    font-weight: 500;
    color: ${(props) => props.theme.color.white};
  }
`;
const LoginBox = styled.div`
  h2 {
    margin-bottom: 28px;
    text-align: center;
    font-size: ${(props) => props.theme.size.normal};
    font-weight: 400;
    color: ${(props) => props.theme.color.gray};
  }
`;

const Form = styled.form``;

const InputWrap = styled.ul``;
const ChBoxWrap = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 33px;
`;

const ChBox = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
  input[type="checkbox"] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid ${(props) => props.theme.color.white};
    background: transparent;
    cursor: pointer;
    &:checked {
      border: none;
      background: ${(props) => props.theme.color.darkblue};
    }
  }
  label {
    margin-left: 8px;
    font-size: ${(props) => props.theme.size.small};
    font-weight: 400;
    color: ${(props) => props.theme.color.gray};
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 53px;
  padding: 0 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  color: ${(props) => props.theme.color.gray};
  background-color: #2f2f2f;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 30px;
  font-size: ${(props) => props.theme.size.normal};
  font-weight: 400;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.darkblue};
  cursor: pointer;
`;

const JoinFind = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 50px;
  li {
    position: relative;
    margin-right: 16px;
    font-size: ${(props) => props.theme.size.small};
    font-weight: 400;
    color: ${(props) => props.theme.color.gray};
    cursor: pointer;
    &::after {
      position: absolute;
      content: "";
      right: -8px;
      width: 1px;
      height: 14px;
      background-color: ${(props) => props.theme.color.gray};
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const SnsBox = styled.div`
  position: relative;
`;
const OrBox = styled.div`
  span {
    display: block;
    width: 23%;
    position: absolute;
    top: 8px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.size.normal};
    font-weight: 400;
    color: ${(props) => props.theme.color.gray};
  }
`;

const LoginSns = styled.div`
  margin: 20px 0 40px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: red;
  }
`;

const Footer = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: ${(props) => props.theme.size.small};
  font-weight: 400;
  color: ${(props) => props.theme.color.gray};
  span {
    margin-bottom: 5px;
    &::before {
      position: absolute;
      top: 3px;
      left: -10px;
      content: "*";
    }
  }
`;
function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};
  return (
    <LoginLayout>
      <h1>로그인</h1>
      <LoginBox>
        <h2>wavve 계정으로 로그인</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputWrap>
              <li>
                <label>
                  <Input
                    {...register("email")}
                    type="text"
                    placeholder="이메일 주소 또는 아이디"
                  />
                </label>
              </li>
              <li>
                <label>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="비밀번호"
                  />
                </label>
              </li>
            </InputWrap>
            <ChBoxWrap>
              <ChBox>
                <input id="save" type="checkbox" />
                <label htmlFor="save">아이디 저장</label>
              </ChBox>
              <ChBox>
                <input id="auto" type="checkbox" />
                <label htmlFor="auto">자동 로그인</label>
              </ChBox>
            </ChBoxWrap>
            <LoginBtn>로그인</LoginBtn>
          </fieldset>
        </Form>
        <JoinFind>
          <li>아이디 찾기</li>
          <li>비밀번호 재설정</li>
          <li>회원가입</li>
        </JoinFind>
      </LoginBox>
      <SnsBox>
        <OrBox>
          <span className="left" />
          <h2>또는 다른 서비스 계정으로 로그인</h2>
          <span className="right" />
        </OrBox>
        <LoginSns>
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </LoginSns>
        <Footer>
          <span>
            SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
          </span>
          <span>
            기존 POOQ 계정 또는 wavve 계정과는 연동되지 않으니 이용에
            참고하세요.
          </span>
        </Footer>
      </SnsBox>
    </LoginLayout>
  );
}

export default Login;
