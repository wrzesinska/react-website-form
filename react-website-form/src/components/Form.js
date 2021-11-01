import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const { control, register, handleSubmit } = useForm();
  const onSubmit = (data) => localStorage.setItem("data", JSON.stringify(data));

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
        name='date-input'
        render={({ field }) => (
          <DatePicker
            className='input'
            placeholderText='Select date'
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      <label>About</label>
      <input {...register("about")} />

      <label>Avatar</label>
      <input {...register("avatar")} />

      <input type='submit' />
    </form>
  );
}

export default Form;
