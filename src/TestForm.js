import React, { useState } from "react";

function TestForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    notes: "",
    myCar: "Volvo"
  });

  // const hdlChange = e => {
  //   console.log(e.target)
  //   setFormData( { ...formData, [e.target.name]: e.target.value} )
  // }

  const hdlChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username' && !/^[a-zA-Z0-9]+$/.test(value) ) {
      console.log('Only alpha-numeric allow');
      return;
    }
  
    setFormData((prv) => ({ ...formData, [name]: value }));
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    if( !/(.*[a-z]){4}/i.test(formData.username) ) {
      console.log('username must > 4')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // Display an error message or take other actions
      console.log('Invalid email format');
      return;
    }

    console.log("Send", formData);
  };

  return (
    <form className="test-form" onSubmit={hdlSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={hdlChange} />
      </label>
      <label>
        E-mail:
        <input type="text" name="email" value={formData.email} onChange={hdlChange} />
      </label>
      <br />
      <br />
      <label>
        Notes:
        <textarea name="notes" value={formData.notes} onChange={hdlChange} />
      </label>
      <select name="myCar" value={formData.myCar} onChange={hdlChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;