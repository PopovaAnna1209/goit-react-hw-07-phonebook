import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

// import PropTypes from 'prop-types';
import './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = {
      name,
      phone,
  };

  const enterContacts = contacts.some(
    contact =>
      (contact.name.toLowerCase() === name.toLowerCase() || contact.phone === phone) ||
      contact.phone === phone
  );
  enterContacts
    ? alert(`${name} or ${phone} is already in contacts`)
    : dispatch(addContact(contact));

  setName('');
  setNumber('');
};

    return (
      <form onSubmit={handleSubmit}>
        <label>
            Name
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </label>

        <label>
          Number
          <input
          type="tel"
          name="number"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  };

// ContactForm.prototypes = {
//   onSubmit: PropTypes.func.isRequired,
// }