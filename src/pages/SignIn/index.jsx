import { useState } from "react";

import { Container, Form, Background } from "./styles";

import backgroundNote from "../../assets/Note.png"

import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { BiLock } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Logo } from "../../components/Logo";

export function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { signIn } = useAuth();

    function handleSignIn(e) {
        signIn({email, password});
    }

    return(
        <Container>
            <Form>
                <Logo></Logo>
                
                <h2>Faça seu login :)</h2>

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

                <Button title="Entrar" onClick={handleSignIn}></Button>

                <p>Não possui cadastro?</p>
                <Link to="/register">
                Criar conta
                </Link>
            </Form>

            <Background>
                <img src={backgroundNote} alt="note image" />
            </Background>
        </Container>
    );
}