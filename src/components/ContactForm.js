
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name }));
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome completo"
        required
      />
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  );
};

export default ContactForm;