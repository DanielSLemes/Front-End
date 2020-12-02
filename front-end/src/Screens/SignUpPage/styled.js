import styled from "styled-components"
import { TextField } from "@material-ui/core";

export const Container = styled.body`
background-color:#2E8B57;
width:100vw;
min-height:100vh;
`

export const Form = styled.form`
display:flex;
flex-direction:column;
width:100vw;
align-items:center;

`
export const InputConfig = styled.div`
display:flex;
justify-content:center;
width:90%;
font-size:30px;
margin-bottom:3vh;
border-radius: 4px 4px 0 0;
background-color:#ffff;
`



export const Button = styled.button`
width:100%;
height:8vh;
border:none;
font-size:4.5vw;
background-color:#006400;
color:#ffff;
cursor:pointer;
margin:0 0 5vh 0;
border-radius: 4px 4px 0 0;
`
export const ContainerButton = styled.div`

`
export const ButtonSignUp = styled.div`
width:90vw;
margin:0 auto;
`
export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    /* -webkit-box-shadow: 0 0 0 30px white inset !important; */
}

`
export const ImageDiv = styled.div`
text-align:center;
margin-bottom:2vh;

`
export const Image = styled.img`
width:60%;
height:60%;
`
export const BackConfig = styled.p`
display:flex;
justify-content:flex-start;
align-items:center;
padding-left:5vw;
height: 64px;
border-bottom:1px solid #FFFF; 
width: 100vw;
margin-bottom:2vh;
`
export const ImageConfig = styled.img`
width:7vw;
height:6vh;
`

