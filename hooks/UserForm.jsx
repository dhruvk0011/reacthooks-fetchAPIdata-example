import React, { useState } from "react";
import useInputHook from "./UseInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInputHook("");
  const [lastName, bindLastName, resetLastName] = useInputHook("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label for='fname'>First Name : </label>
          <input type='text' id='fname' {...bindFirstName} />
        </div>
        <div>
          <label for='lname'>Last Name : </label>
          <input type='text' id='lname' {...bindLastName} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default UserForm;
