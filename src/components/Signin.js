import { Wrapper, Header, Paragraf, Main, MainHead, InputWrap , Input, Button, Footer, LinkButton, Avatar } from '../Style';
import { MdEmail, MdLock, MdPhotoCamera } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import React from 'react';
import '../App.css'
const Signin = (props) => {
  return (
    <Wrapper>
        <Header>
          Welcome
        </Header>
        <Paragraf>
          Signup into your account
        </Paragraf>
        <Main>
        <Avatar><MdPhotoCamera className='photoicon' /></Avatar>
          <MainHead>
            Sign up
          </MainHead>
          <InputWrap>
            <BiUser style={{ color: '#ACC0F5' }} />
            <Input type='text' className='input foc' placeholder='Full Name' />
          </InputWrap>
          <InputWrap>
            <MdEmail style={{ color: '#ACC0F5' }} />
            <Input type='email' className='input foc' placeholder='E-mail' />
          </InputWrap>
          <InputWrap>
            <MdLock style={{ color: '#ACC0F5' }} />
          <Input type='password' className='input foc' placeholder='Password' />
          </InputWrap>
          <Button>SIGN UP</Button>
        </Main>
        <Footer>Already have an account?<LinkButton onClick={props.meth}>Log In</LinkButton></Footer>  
    </Wrapper>
  )
}

export default Signin
