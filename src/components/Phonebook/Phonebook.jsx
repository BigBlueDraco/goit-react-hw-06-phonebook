import React from 'react';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';

export const Phonebook = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      <FormAddContacts />
      <Section title="Contacts">
        <Filter />
        <ContactsList contacts={contacts} filter={filter} />
      </Section>
    </>
  );
};
