import PhoneBookWrapper from './layout/PhoneBookMainLayout';
import PhoneBook from './pages/phonebook';

function App() {
  const contacts = [];

  return (
    <PhoneBookWrapper>
      <PhoneBook contacts={contacts} />
    </PhoneBookWrapper>
  );
}

export default App;
