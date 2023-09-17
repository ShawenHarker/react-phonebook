import { useState } from "react";
import FormInput from "../../components/form-inputs/FormInput";
import colors from "../../utils/colors";
import fontTypes from "../../utils/fontTypes";

function PhoneBook({ addContact }) {
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
    addContact(newContact);

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
        background: colors.white,
        padding: "10px auto",
        borderRadius: "16px 0px 0px 16px",
      }}
    >
      <FormInput
        title="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
      />
      <FormInput
        title="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
      />
      <FormInput
        title="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="number"
      />
      <button
        type="submit"
        style={{
          marginTop: "10px",
          borderRadius: "8px",
          backgroundColor: colors.tale,
          color: colors.green,
          border: `2px solid ${colors.green}`,
          padding: "10px 20px",
          fontFamily: fontTypes.main,
          fontWeight: "bolder",
        }}
      >
        Add New Contact
      </button>
    </form>
  );
}

export default PhoneBook;
