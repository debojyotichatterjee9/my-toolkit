import React, { useRef, useState } from "react";

const BasicForm = (props) => {

  const firstNameRef = useRef();
  const [firstName, setFirstName] = useState("");
  const firstNameChangedHandler = event => {
    setFirstName(event.target.value);
  }
  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(firstName);
    console.log(firstNameRef.current.value)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input ref={firstNameRef} type='text' id='name' onChange={firstNameChangedHandler} />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
