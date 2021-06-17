import React, { useState, useEffect } from "react";
import ContactList from './ContactList'

function App() {
  const [contacts, setContacts] = useState(["omar","adel","dina","dragon","obama"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    console.log(searchTerm)
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return contact.toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log(newContactList)
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };


  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
  );
}

export default App;
