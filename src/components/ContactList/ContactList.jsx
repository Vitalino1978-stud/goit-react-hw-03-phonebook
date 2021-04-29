import React from 'react';
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => (
  <ul className={css.contactList}>
          {contacts.map(contact => 
            <li className={css.contactListItem} >
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
            </li>)
          }
          
        
</ul>
)

export default ContactList;
