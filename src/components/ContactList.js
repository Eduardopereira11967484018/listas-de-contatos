import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <List>
      {contacts.map((contact, index) => (
        <ListItem key={index}>{contact.name}</ListItem>
      ))}
    </List>
  );
};

export default ContactList;
