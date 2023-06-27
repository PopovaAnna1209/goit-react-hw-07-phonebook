import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from '../../redux/selectors';
import { ContactListElem } from '../ContactListElem/ContactListElem';

export const ContactList = () => {
  const filter = useSelector(selectContactsFilter).toLowerCase();
  const contacts = useSelector(selectContacts);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
  <>
    {contacts && (
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactListElem
                key={id}
                id={id}
                name={name}
                phone={phone}
              />
          );
      })}
    </ul>
    )
  }
</>
  )
}










// import PropTypes from 'prop-types';
// import './ContactList.module.css';
// import { useSelector } from 'react-redux';
// import { getFilter } from '../../redux/filterSlice';
// import {
//   useGetContactsQuery,
//   useDeleteContactMutation,
// } from '../../redux/contactsSlice';
// import { ContactListElem } from '../ContactListElem/ContactListElem';

// export const ContactList = () => {
//   const filter = useSelector(getFilter);
//   const { data: contacts, isFetching } = useGetContactsQuery();
//   const [deleteContact] = useDeleteContactMutation();

//   const findContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     if (contacts) {
//       return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//       );
//     }
//   };

//   const filteredContacts = findContacts();



//   return (
//   <>
//     {isFetching && <p>Loading...</p>}
//     {contacts && (
//       <ul>
//         {filteredContacts.map(({ id, name, phone }) => {
//           return (
//             <ContactListElem
//                 key={id}
//                 id={id}
//                 name={name}
//                 phone={phone}
//                 onClick={deleteContact}
//               />
//           );
//       })}
//     </ul>
//     )
//   }
// </>
//   )
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// })),
//   deleteContact: PropTypes.func.isRequired,
// };