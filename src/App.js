import { useState } from "react";
import Input from "./Components/Input";
import "./App.css";
export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [valid, setValid] = useState({
    Email: false,
    Password: false,
    ConfirmPassword: false
  });

  const validate = (name, value) => {
    switch (name) {
      case "email":
        value.includes("@") &&
        value.includes(".") &&
        value.indexOf("@") !== 0 &&
        value.length - value.lastIndexOf(".") >= 3
          ? setValid({ ...valid, Email: true })
          : setValid({ ...valid, Email: false });
        return;

      case "password":
        value.length >= 8
          ? setValid({ ...valid, Password: true })
          : setValid({ ...valid, Password: false });
        return;

      case "confirmPassword":
        console.log(value === form.password);
        value === form.password
          ? setValid({ ...valid, ConfirmPassword: true })
          : setValid({ ...valid, ConfirmPassword: false });
        return;

      default:
        return;
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    validate(name, value);
    setForm({ ...form, [name]: value });
  };
  const handleClick = () => {
    const { Email, Password, ConfirmPassword } = valid;
    console.log(Email && Password && ConfirmPassword);
    Email && Password && ConfirmPassword
      ? alert("you are signed up")
      : alert("signup error");
  };
  return (
    <div className="App">
      <div className="container">
        <Input
          label="Email"
          type="text"
          name="email"
          value={form.email}
          onClick={handleChange}
          valid={valid.Email}
          error="Invalid email format"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onClick={handleChange}
          valid={valid.Password}
          error="Password must be atleast 8 characters"
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onClick={handleChange}
          valid={valid.ConfirmPassword}
          error="Password do not match"
        />
        <button onClick={handleClick}>Sign up</button>
      </div>
    </div>
  );
}
