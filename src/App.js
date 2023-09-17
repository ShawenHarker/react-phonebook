import { useState } from 'react';
import PhoneBookWrapper from './layout/PhoneBookMainLayout';
import PhoneBook from './pages/phonebook';
import PhoneBookDisplay from './pages/table/PhoneBookDisplay';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <PhoneBookWrapper>
      <PhoneBook addContact={addContact} />
      <PhoneBookDisplay contacts={contacts} />
    </PhoneBookWrapper>
  );
}

export default App;
