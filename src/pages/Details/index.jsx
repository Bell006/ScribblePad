import { Container, Links, Content } from './styles' //importação direta já aplica as estilizações
import { Fragment } from "react" //ou só <> </> sem importação

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {

  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
          React JS é uma biblioteca de JavaScript utilizada para construir interfaces de usuário dinâmicas e escaláveis. utiliza uma abordagem baseada em estado para atualizar 
          a interface do usuário de forma eficiente e responsiva. Com a popularidade crescente do React, existem muitos recursos e comunidades disponíveis para ajudar os desenvolvedores 
          a aprender e trabalhar com esta poderosa biblioteca.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="@">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Node.js" />
            <Tag title="React.js" />
          </Section>
          
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}