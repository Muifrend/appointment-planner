import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option></option>
      {contacts.map(contact => (<option>{contact.phoneNum}</option>))}
    </select>
  );
};
