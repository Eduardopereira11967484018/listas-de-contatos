import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ContactItem from './ContactItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
