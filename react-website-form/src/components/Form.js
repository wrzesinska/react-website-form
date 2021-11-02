import { React, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const { control, register, handleSubmit } = useForm();
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const onSubmit = (item) => {
    setItems([...items, item]);
    history.push("/profile");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='form-title'>Sign Up</h1>
      <label>First Name</label>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <label>Last Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <label>Email</label>
      <input {...register("email")} />
      <label>Phone</label>
      <input {...register("phone")} />
      <label>Birthday</label>

      <Controller
        control={control}
        name='birthday'
        render={({ field }) => (
          <DatePicker
            className='input'
            dateFormat='dd MMMM yyyy'
            placeholderText='Select date'
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      <label>About</label>
      <input {...register("about")} />

      <label>Avatar</label>
      <select {...register("src")}>
        <option value='images/avatar-svgrepo-com.svg'>female</option>
        <option value='male'>male</option>
        <option value='other'>other</option>
      </select>

      <input type='submit' />
    </form>
  );
}

export default Form;
