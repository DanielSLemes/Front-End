import styled from "styled-components"
import {  TextField } from "@material-ui/core";


export const Container = styled.body`
background-color:#2E8B57;
width:100vw;
min-height:100vh;
`

export const Form= styled.form`
display:flex;
flex-direction:column;

align-items:center;

`
export const InputConfig = styled.div`
display:flex;
justify-content:center;
width:90%;
font-size:30px;
margin:2vh 0 0 0;
background-color: white;
`

export const Button= styled.button`
width:90%;
height:8vh;
border:none;
font-size:4.5vw;
background-color:#006400;
color:#ffff;
border-radius:5px 5px 0 0;
`
export const ContainerButton = styled.div`
margin-top:2vh;

`
export const ButtonAnimation = styled.span`
cursor:pointer;
`
export const SignUp = styled.p`
cursor:pointer;
height: 18px;
font-family: Roboto;
font-size: 4vw;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #ffff;
margin:3vh 0 10vh 0;
`

export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    /* -webkit-box-shadow: 0 0 0 30px white inset !important; */
}
`
export const ButtonConfig = styled.div`

width:100%;
margin-top:2vh;
display: flex;
justify-content: center;
`
export const ImageDiv = styled.div`
text-align:center;
width:100vw;
`
export const Image = styled.img`

width:60%;
height:60%;
`
export const DivAnimation = styled.div`
margin:0 auto;
width:80vw;
`



