import { Container, Brand, Logout, Profile, LogoGreetings } from "./styles";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';
import placeHolderImg from "../../assets/avatar_placeholder.svg";

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg;

    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }


    return (
        <Container>
            <LogoGreetings>
                <Brand to="/">
                    ScribblePad
                </Brand>

                <div>
                    <span>Bem-vindo(a),</span>
                    <strong>{user.name}</strong>
                </div>
            </LogoGreetings>
            
            <Logout>
                <Profile to="/users">  
                    <img src={avatarUrl} alt={user.name} />
                </Profile>

                <ImExit onClick={handleSignOut}></ImExit>
            </Logout>
        </Container>
    );
}