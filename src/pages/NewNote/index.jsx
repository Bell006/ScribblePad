import { Container, Form } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function NewNote() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                        Voltar
                        </Link>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis"> 
                        <NoteItem value="https://rockseat.com.br" />
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Tags">
                        <div className="tags">
                        <NoteItem value="React.js" />
                        <NoteItem isNew placeholder="Nova tag" />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}