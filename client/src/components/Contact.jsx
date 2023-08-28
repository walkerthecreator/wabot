import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {email,name,message}
    setData([...data,userData])
  }
  return (
    <>
      <form className="contact-div">
        <h1>Contact Us</h1>
        <div className="form">
          <input
            className="full-name"
            value={name}
            type="text"
            placeholder="Full name"
            onChange={e => setName(e.target.value)}
          ></input>
          <input
            className="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          ></input>
          <input
            className="message"
            value={message}
            type="text"
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}
          ></input>
          <button className="submit-btn" value={name} onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
      {data.map((value,index)=>{
        return <p key={index}>{value.name} {value.message} </p>
      })}
    </>
  );
};

export default Contact;
