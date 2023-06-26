// import PropTypes from 'prop-types'
import { useDeleteContactMutation } from '../../redux/contactsSlice';

export const ContactListElem = ({ id, name, phone }) => {
    const [deleteContact] = useDeleteContactMutation();
    const [{ isLoading }] = useDeleteContactMutation();

    return (
    <li>
        <p>
        {name}: {phone}
        </p>
        <button type="button" onClick={() => {deleteContact(id)}}>
            {isLoading ? '...' : 'Delete'}
        </button>
    </li>
    );
    }

// ContactListElem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };