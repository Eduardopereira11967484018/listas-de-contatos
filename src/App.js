import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const App = () => {
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </Container>
  );
};

export default App;

