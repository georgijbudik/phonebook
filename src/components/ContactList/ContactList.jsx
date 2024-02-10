import { Container, OrderedList } from '@chakra-ui/react';
import ContactListItem from 'components/ContactList/ContactListItem';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    filteredContacts.length > 0 && (
      <Container
        mt={2}
        style={{
          borderRadius: '0.3rem',
          background: 'white',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <OrderedList spacing={2} p={2}>
          {filteredContacts.map(({ _id, name, phone }) => (
            <ContactListItem
              key={_id}
              _id={_id}
              name={name}
              phone={phone}
            ></ContactListItem>
          ))}
        </OrderedList>
      </Container>
    )
  );
};

export default ContactList;
