import { Container, Form, Background } from "./styles";

import backgroundTarget from "../../assets/Target.png"

import { Link } from "react-router-dom";

import { BiLock, BiUser } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';


import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Logo } from "../../components/Logo";

export function SignUp() {
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
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={AiOutlineMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={BiLock}
                />

                <Button title="Entrar"></Button>

                <Link to="/">
                Voltar para tela de login
                </Link>
            </Form>

        </Container>
    );
}