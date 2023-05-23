import { useState } from 'react';
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom";

import { BsArrowLeft } from 'react-icons/bs';
import { BiLock, BiUser, BiCamera } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

import { Container, Form, Avatar } from "./styles";

import { api } from '../../services/api';
import placeHolderImg from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button'


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    };

    async function handleUpdateProfile() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        }

        const userUpdated = Object.assign(user, updated)
        
        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleUpdateAvatar(event){
        const file = event.target.files[0] //puxando o arquivo upado

        setAvatarFile(file)

        const imgPreview = URL.createObjectURL(file) //criando url do novo arquivo
        setAvatar(imgPreview)
    }
        
    return(
        <Container>
            <header>
                <button onClick={handleBack}>
                    <BsArrowLeft/>
                </button>


                <p>Perfil</p>
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatarUrl} 
                        alt="User picture" 
                    />

                    <label htmlFor='avatar'>
                        <BiCamera />

                        <input
                            id='avatar'
                            type='file'
                            onChange={handleUpdateAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={BiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="usuário@email.com"
                    type="email"
                    icon={AiOutlineMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={BiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={BiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdateProfile} />
            </Form>
        </Container>
    );
};