import { useState } from "react";

function PhoneBook({ contacts }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      firstName,
      lastName,
      phoneNumber,
    };
    contacts.push(newContact);

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
      }}
    >
      <label>First Name</label>
      <input
        title="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
      />
      <label>Last Name</label>
      <input
        title="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
      />
      <label>Phone Number</label>
      <input
        title="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="number"
      />
      <button type="submit">Add New Contact</button>
    </form>
  );
}

export default PhoneBook;
