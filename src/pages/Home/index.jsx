import { ImSearch } from "react-icons/im";
import { MdNotes, MdArticle } from "react-icons/md"

import { Container, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import {  NavButton  } from '../../components/NavButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from "../../components/Note";

export function Home() {
    return(
    <Container>
        <Header/>

        <Menu>
            <h1>
                <svg width="30" height="30"  fill="currentColor">
                    <MdNotes />
                </svg>
                Biblioteca
            </h1>

            <ul>
                <NavButton title="JavaScript" icon={MdArticle}></NavButton>
                <NavButton title="React.js" icon={MdArticle}></NavButton>
                <NavButton title="Node.js" icon={MdArticle}></NavButton>
            </ul>
        </Menu>

        <NewNote>+ Criar Nota</NewNote>

        <Search>
            <Section title="Pesquisar">
            </Section>
            <Input placeholder="Pesquisar pelo título" icon={ImSearch}/>
        </Search>

        <Content>
            <Section title="Notas"></Section>

            <main>
                <Note data={{
                    title: "React.js", tags: [
                        {id: 1, name: "React"},
                        {id: 2, name: "RocketSeat"}
                    ]
                    }}
                    />

            </main>
        </Content>


    </Container>
    );
};