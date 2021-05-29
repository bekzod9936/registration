import { Wrapper, Button, Header, Paragraf, Main, MainHead, InputWrap, Input, Forgot, Footer, LinkButton, Avatar  } from '../Style';
import { MdEmail, MdLock } from "react-icons/md";
import React from 'react';
import '../App.css';
const Signup = (props) => {
  return (
    <Wrapper>
      <Header>
        Welcome Back
      </Header>
      <Paragraf>
        Login back into account
      </Paragraf>
      <Main>
        <Avatar />
        <MainHead>
          Log In
        </MainHead>
        <InputWrap>
          <MdEmail style={{ color: '#ACC0F5' }} />
          <Input type='email' className='input foc' placeholder='E-mail' />
        </InputWrap>
        <InputWrap>
          <MdLock style={{ color: '#ACC0F5' }} />
          <Input type='password' className='input foc' placeholder='Password' />
        </InputWrap>
        <Forgot>
          Forgot Password?
        </Forgot>
        <Button>SIGN IN</Button>
      </Main>
      <Footer>Don't have an account yet? <LinkButton onClick={props.meth}>Join Now</LinkButton></Footer>
    </Wrapper>
  )
}

export default Signup
