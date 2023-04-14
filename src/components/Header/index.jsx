import { Container, Brand, Logout, Profile, LogoGreetings } from "./styles";
import { ImExit } from "react-icons/im";

export function Header() {
    return (
        <Container>
            <LogoGreetings>
                <Brand to="/">
                    ScribblePad
                </Brand>

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Bell Amancio</strong>
                </div>
            </LogoGreetings>
            
            <Logout>
                <Profile to="/profile">  
                    <img src="https://github.com/bell006.png" alt="Foto do usuário" />
                </Profile>

                <ImExit></ImExit>
            </Logout>
        </Container>
    );
}