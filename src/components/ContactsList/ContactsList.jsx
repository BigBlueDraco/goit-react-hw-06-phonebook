import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <>
      <ul>
        {contacts &&
          contacts
            .filter(({ name }) => name.toLowerCase().includes(filter))
            .map(elem => (
              <ContactsItem
                key={elem.name}
                name={elem.name}
                number={elem.number}
              />
            ))}
      </ul>
    </>
  );
};

const ContactsItem = ({ id, name, number }) => {
  const dispath = useDispatch();
  return (
    <li id={id}>
      {name}
      {number}
      <button data-id={id} onClick={e => dispath(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};
