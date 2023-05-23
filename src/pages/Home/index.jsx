import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { ImSearch } from "react-icons/im";
import { MdNotes } from "react-icons/md";

import { Container, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import {  NavButton  } from '../../components/NavButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from "../../components/Note";

export function Home() {
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleSelectedTag(tagName) {
        if(tagName === "all") {
            return setSelectedTags([]);
        }

        const alreadySelected = selectedTags.includes(tagName);

        if(alreadySelected) {
            const filteredTags = selectedTags.filter(tag => tag !== tagName);
            setSelectedTags(filteredTags);
        } else {
            setSelectedTags(prevState => [...prevState, tagName]);
        }
    };

    function handleDetails(noteId) {
        return navigate(`/details/${noteId}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);

        };
    
        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`);
            setNotes(response.data)
        };

        fetchNotes();
    }, [selectedTags, search])

    return (
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
                    <NavButton 
                            all 
                            title={"Todas as tags"}
                            onClick={() => handleSelectedTag("all")}      
                            isActive={selectedTags.length === 0}
                        /> 
                {
                    tags && tags.map(tag => (
                        <NavButton 
                            title={tag.name} 
                            key={String(tag.id)}
                            onClick={() => handleSelectedTag(tag.name)}      
                            isActive={selectedTags.includes(tag.name)}
                        />    
                    ))
                }
            </ul>
        </Menu>

        <NewNote to="/newNote">+ Criar Nota</NewNote>

        <Search>
            <Section title="Pesquisar">
            </Section>
            <Input 
                placeholder="Pesquisar pelo título" 
                icon={ImSearch}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Search>

        <Content>
            <Section title="Notas"></Section>

            <main>
                {      
                    notes.map(note => (
                        <Note
                            key={String(note.id)} 
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                    ))        
                }
            </main>
        </Content>


    </Container>
    );
};