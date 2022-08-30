import './App.css';
import uniqid from 'uniqid'
import React,{useState,useEffect} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts,setContacts] = useState([])

  const addContactHandler = (contact) =>{
        setContacts([...contacts,{id:uniqid(),...contact}])
  }

  const removeContactHandler =(id)=>{
      const newContactList = contacts.filter((newContact)=> newContact.id !== id)
      setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() =>{
    if(contacts.length > 0)
{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}
}, [contacts]);


  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} /> 
    </div>
  );
}

export default App;
