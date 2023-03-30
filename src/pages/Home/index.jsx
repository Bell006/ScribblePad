import { Container, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header'

export function Home() {
    return(
    <Container>
        <Header/>

        <Menu>
            <NewNote>+ Criar Nota</NewNote>
        </Menu>

        <Search>
    
        </Search>

        <Content>

        </Content>


    </Container>
    );
};