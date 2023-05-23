import { Container, Form, Background } from "./styles";

import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import { BiLock, BiUser } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import backgroundTarget from "../../assets/Target.png";


import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Logo } from "../../components/Logo";

export function SignUp() {
    const [name, setName] = useState(""); //valor inicial do estado = vazio
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos.");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/")
        }).catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Ops! Não foi possível realizar o cadastro.")
            }
        })
    }

    return(
        <Container>
                <Background>
                    <img src={backgroundTarget} alt="target image" />
                </Background>
            <Form>

                <Logo></Logo>
                
                <h2>Crie sua conta! <br/> É rapidinho:</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={BiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={AiOutlineMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={BiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}></Button>

                <Link to="/">
                Voltar para tela de login
                </Link>
            </Form>

        </Container>
    );
}