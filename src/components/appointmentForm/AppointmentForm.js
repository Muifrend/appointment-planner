import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="Title"
        type='text'
        onChange={({target})=>{
          setTitle(target.value)
        }}
        value={title}
        />
        <input
        placeholder="Date"
        type='date'
        onChange={({target})=>{
          setDate(target.value)
        }}
        value={date}
        min={getTodayString()}
        />
        <input
        placeholder="Time"
        type='time'
        onChange={({target})=>{
          setTime(target.value)
        }}
        value={time}
        />
        <ContactPicker 
        contacts={contacts}
        onChange={({target})=>{
          setContact(target.value)
        }}
        />
        <input type='submit'/>
      </form>
    </div>
  );
};
