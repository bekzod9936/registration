import { Wrapper, Header, Paragraf, Main, MainHead, InputWrap , Input, Button, Footer, LinkButton, Avatar } from '../Style';
import { MdEmail, MdLock, MdPhotoCamera } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import React from 'react';
import '../App.css'
const Signin = (props) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (e.target.name.value !== '' && e.target.email.value !== '' && e.target.password.value !== 0  ){
      const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      localStorage.setItem('user', JSON.stringify(user))
      props.meth();
      e.target.reset();
    }else {
      alert('Please fill all feilds !!!');
    }
  }
  return (
    <Wrapper>
        <Header>
          Welcome
        </Header>
        <Paragraf>
          Signup into your account
        </Paragraf>
        <Main>
        <Avatar><label htmlFor='avatar' style={{ cursor: 'pointer'}}><MdPhotoCamera className='photoicon' /></label><input id='avatar' type='file' style={{display: 'none'}} /></Avatar>
          <MainHead>
            Sign up
          </MainHead>
          <form onSubmit={handleSubmit}>
          <InputWrap>
            <BiUser style={{ color: '#ACC0F5' }} />
            <Input type='text' className='input foc' name='name' placeholder='Full Name' />
          </InputWrap>
          <InputWrap>
            <MdEmail style={{ color: '#ACC0F5' }} />
            <Input type='email' className='input foc' name='email' placeholder='E-mail' />
          </InputWrap>
          <InputWrap>
            <MdLock style={{ color: '#ACC0F5' }} />
          <Input type='password' className='input foc' name='password' placeholder='Password' />
          </InputWrap>
          <Button type='submit'>SIGN UP</Button>
        </form>
        </Main>
        <Footer>Already have an account?<LinkButton onClick={props.meth}>Log In</LinkButton></Footer>  
    </Wrapper>
  )
}

export default Signin
