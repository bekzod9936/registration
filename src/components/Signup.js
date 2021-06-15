import { Wrapper, Button, Header, Paragraf, Main, MainHead, InputWrap, Input, Forgot, Footer, LinkButton, Avatar  } from '../Style';
import { MdEmail, MdLock } from "react-icons/md";
import React from 'react';
import '../App.css';
const Signup = (props) => {
  const handleSubmit=(e)=>{
     e.preventDefault();
     const user=JSON.parse(localStorage.getItem('user'));
     if(e.target.email.value !== '' && e.target.password.value){
       if (e.target.email.value === user.email && e.target.password.value===user.password){
               props.open();  
       } else{ alert('Something is wrong !!!')}
     } else{
       alert('Please fill all feilds !!!')
     }
  }
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
      <form onSubmit={handleSubmit}>
        <InputWrap>
          <MdEmail style={{ color: '#ACC0F5' }} />
          <Input type='email' className='input foc' name='email' placeholder='E-mail' />
        </InputWrap>
        <InputWrap>
          <MdLock style={{ color: '#ACC0F5' }} />
          <Input type='password' className='input foc' name='password' placeholder='Password' />
        </InputWrap>
        <Forgot>
          Forgot Password?
        </Forgot>
        <Button type='submit'>SIGN IN</Button>
        </form>
      </Main>
      <Footer>Don't have an account yet? <LinkButton onClick={props.meth}>Join Now</LinkButton></Footer>
    </Wrapper>
  )
}

export default Signup
