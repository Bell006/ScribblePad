import { useState } from "react";
import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function NewNote() {
    const [title, setTitle] = useState("");
    const [description, setNoteDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    };

    function handleAddLink() {
       if (!newLink) {
           return alert("Preencha o campo antes de adicionar um link.")
        } 
        setLinks(prevState => [...prevState, newLink]); //acessando o estado anterior e juntando com o novo link
        setNewLink("")
    };

    function handleDeleteLink(deletedLink) {
        setLinks(prevLinks => prevLinks.filter(link => link !== deletedLink));
    };

    function handleAddTag() {
        if (!newTag) {
           return alert("Preencha o campo antes de adicionar uma tag.")
        }
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleDeleteTag(deletedTag) {
        setTags(prevTags => prevTags.filter(tag => tag !== deletedTag));
    }

    async function handleNewNote() {
        if(!title || !description) {
            return alert("Título e descrição são obrigatórios.")
        }

        if(newLink || newTag) {
            return alert("Você nomeou um link/uma tag, mas esqueceu de adicionar. Clique em + para adicionar, ou deixe o campo em branco.")
        }

        await api.post("/notes", {
            title, 
            description, 
            tags, 
            links
        });

        alert("Nota cadastrada com sucesso!");
        return navigate("/")
    }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a onClick={handleBack}> 
                        Voltar
                        </a>
                    </header>

                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)} 
                    />
                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setNoteDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)} 
                                    value={link}
                                    onClick={() => handleDeleteLink(link)}
                                />
                            ))
                        }

                        <NoteItem 
                            isNew 
                            placeholder="Novo link" 
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Tags">
                        <div className="tags">
                            {
                                tags.map((tag, index) => ( 
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleDeleteTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                                value={newTag} 
                            />
                        </div>
                    </Section>
                    <Button 
                        title="Salvar" 
                        onClick={handleNewNote} 
                    />
                </Form>
            </main>
        </Container>
    );
}