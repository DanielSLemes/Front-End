import { useHistory } from "react-router-dom";
import { Container, InputConfig, Form, ButtonSignUp, ImageDiv, Image, BackConfig, ImageConfig, Button, Input } from './styled';
import axios from 'axios';
import React, { useEffect } from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../Theme/Theme";
import { BASE_URL } from "../../hooks/BaseUrl/BASE_URL";
import { useForm } from "../../hooks/useForm";



const SignUpPage = () => {
    const { form, onChange, resetState } = useForm({ name: "", email: "",password: "" ,nickname: "",  });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    
    const handleSignUp = (event) => {
        event.preventDefault()
        resetState()
        const body = {
            name: form.name,
            email: form.email,
            password: form.password,
            nickname: form.nickname
        }
        axios
            .post(`${BASE_URL}/user`, body)
            .then((response) => {
                window.localStorage.setItem("token", response.data.token);
                console.log(response.data)
             
            })
            .catch((err) => {
                alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
            });
    }
    return (
        <Container>
            {/* <BackConfig onClick={() => history.push("/login")}> <AnimationBack /></BackConfig> */}
            {/* <ImageDiv>
                <Image src={LOGO} />
            </ImageDiv> */}
            <ThemeProvider theme={theme}>
                <Form >
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Nome"
                            value={form.name}
                            type="name"
                            name="name"
                            placeholder="Nome"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="E-mail"
                            value={form.email}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Nickname"
                            value={form.nickname}
                            type="text"
                            name="nickname"
                            placeholder="digite seu sobrenome"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="secondary"
                            variant={"filled"}
                            label="Senha"
                            value={form.password}
                            type="text"
                            name="password"
                            placeholder="senha"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                </Form>
                <ButtonSignUp>
                    <Button onClick={handleSignUp}>Criar</Button>
                  
                </ButtonSignUp>
            </ThemeProvider>
        </Container>
    );
}
export default SignUpPage;


