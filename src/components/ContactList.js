import React from 'react'
import './App.css';
import ContactCard from './ContactCard';

const ContactList = (props)=>{
    
    console.log(props)
    const {contacts,removeContactHandler} = props

    const renderContactList = contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} key={contact.id} deleteHandler={removeContactHandler}></ContactCard>
        )
})

return(
    <div className='ui celled list'>{renderContactList}</div>
)

}

export default ContactList