import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  flex: 1;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
`;

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newName = prompt("Edit name:", contact.name);
    const newEmail = prompt("Edit email:", contact.email);
    const newPhone = prompt("Edit phone:", contact.phone);
    if (newName && newEmail && newPhone) {
      dispatch(editContact({ id: contact.id, name: newName, email: newEmail, phone: newPhone }));
    }
  };

  return (
    <Item>
      <Info>
        <div>{contact.name}</div>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
      </Info>
      <div>
        <Button onClick={handleEdit}>Editar</Button>
        <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
      </div>
    </Item>
  );
};

export default ContactItem;
