import { BsArrowLeft } from 'react-icons/bs';
import { BiLock, BiUser, BiCamera } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button'


export function Profile() {
    return(
        <Container>
            <header>
                <a href="/">
                    <BsArrowLeft />
                </a>
                <p>Perfil</p>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/bell006.png" 
                    alt="User picture" 
                    />

                    <label htmlFor='avatar'>
                        <BiCamera />

                        <input
                            id='avatar'
                            type='file'
                        ></input>
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={BiUser}
                />

                <Input
                    placeholder="usuário@email.com"
                    type="email"
                    icon={AiOutlineMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={BiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={BiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
};