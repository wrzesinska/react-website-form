import { React, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      <label>First Name*</label>
      <input
        {...register("firstName", { required: true, maxLength: 30 })}
        type='text'
      />
      <span className='error'>
        {errors.firstName?.type === "required" && "First name is required"}
      </span>
      <label>Last Name</label>
      <input {...register("lastName")} />
      <label>Email*</label>
      <input
        {...register("email", {
          required: true,
        })}
        type='email'
      />
      <span className='error'>
        {errors.email?.type === "required" && "Email is required"}
      </span>
      <label>Phone</label>
      <input {...register("phone")} type='number' />
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
        <option value='images/avatar-female.svg'>Female</option>
        <option value='images/avatar-male.svg'>Male</option>
        <option value='images/avatar-monster.svg'>Other</option>
      </select>

      <input type='submit' />
    </form>
  );
}

export default Form;
