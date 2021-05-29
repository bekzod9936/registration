import styled from 'styled-components'

export const Container=styled.div`
background-color: #EFEFEF; 
width: 100vw;
height:100vh;
display: flex;
justify-content:center;
align-items:center;
`;

export const Wrapper=styled.div`
background-color: white;
width: 20%;
height: 80%;
border-radius:20px;
margin:10px;
padding: 20px 15px 40px ;
`;
export const Header=styled.div`
color: black;
font-weight: 700;
font-size:24px;
font-family: sans-serif;
`
export const Paragraf=styled.p`
color:#717171;
margin: 5px 0;
`;
export const Main=styled.div`
background-color: #336CEF;
padding: 20px;
border-radius: 40px 40px 40px 10px;
margin-top: 3rem;
 position: relative;
`;
export const MainHead = styled.div`
color: white;
font-weight: 700;
font-size:24px;
font-family: sans-serif;
margin-bottom: 20px;
`;
export const InputWrap= styled.div`
width: 100%;
height: 40px;
border: 1.6px solid #ACC0F5;
background-color: transparent;
display:flex;
justify-content:space-around;
align-items: center;
margin: 5px 0;
`;
export const Input= styled.input`
width:80%;
height:90%;
background-color: transparent;
border:none;
`;
export const Forgot=styled.div`
color:#ddd;
display:flex;
justify-content: flex-end;
font-size:10px;
`
export const Button= styled.button`
width:75%;
margin: 0 auto;
background-color: white;
color:#222;
font-weight:600;
border-radius:20px;
border:none;
display:flex;
justify-self:center;
justify-content:center;
padding: 0.5rem 0;
font-size:10px;
margin-top:10px;
`;
export const Footer= styled.div`
color:black;
font-size:12px;
font-weight: 600;
text-align:center;
margin-top:15px;
`;
export const LinkButton=styled.button`
background-color: transparent;
color:#336CEF;
border:none;
cursor:pointer;
`;

export const Avatar= styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  width: 80px;
  height:80px;
  background-color: #EFEFEF;
  border-radius: 5px 50% 50% 50%;
  display:flex;
  justify-content:center;
  align-items:flex-end;
`
