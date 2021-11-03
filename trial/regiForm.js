import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}{" "}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Laste Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>a
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// ****************************************************************************

import React from "react";

class Form extends Components {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      username: "",
      password: "",
    };
  }

  handleFullnameChange = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={this.state.fullname}
            onChange={this.handleFullnameChange}
          />
        </div>
      </form>
    );
  }

  handlEemailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
      </form>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleusernameChange}
          />
        </div>
      </form>
    );
  }

  handleUsernameChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <Form>
        <div>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
      </Form>
    );
  }
}

export default Form;
