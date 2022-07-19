import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="Name"
        type='text'
        onChange={({target})=>{
          setName(target.value)
        }}
        value={name}
        />
        <input
        placeholder="Phone"
        type='tel'
        pattern="(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)"
        onChange={({target})=>{
          setPhone(target.value)
        }}
        value={phone}
        />
        <input
        placeholder="Email"
        type='email'
        onChange={({target})=>{
          setEmail(target.value)
        }}
        value={email}
        />
        <input type='submit'/>
      </form>
    </div>
  );
};
