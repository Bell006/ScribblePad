import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Links, Content } from './styles' //importação direta já aplica as estilizações

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  const [note, setNote] = useState(null);

  const params = useParams();
  const note_id = params.id;

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteNote() {
    const confirm = window.confirm("Deseja excluir a nota? Tags e links também serão excluídos.")

    if(confirm) {
      await api.delete(`/notes/${note_id}`);
      handleBack();
    }
  }
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${note_id}`);

      setNote(response.data)
    }

    fetchNote()
  })

  return (
    <Container>
      <Header/>

      { note &&    
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleDeleteNote}/>

            <h1>{note.title}</h1>

            <p>{note.description}</p>

            {   
              note.links &&         
              <Section title="Links úteis">
                <Links>
                  {
                    note.links.map(link => (
                      <li key={String(link.id)}>
                        <a
                          target="_blank" 
                          href={`https://${link.url}`}
                        >
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              note.tags &&
              <Section title="Marcadores">
                {
                  note.tags.map(tag => (
                    <Tag 
                      key={tag.id}
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <Button title="Voltar" onClick={handleBack} />

          </Content>
        </main>
      }

    </Container>
  )
}