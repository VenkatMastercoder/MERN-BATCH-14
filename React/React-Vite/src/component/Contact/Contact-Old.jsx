import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = () => {
    console.log(name, email, message);
  };

  // onSubmit={()=>handleSubmit("dsvnlds")} - 1 : Arguments
  // onSubmit={handleSubmit} - 2 : NO Arguments

  return (
    <>
      <p>Hello This a Contact Page</p>

      <form className="bg-slate-300 p-5 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col w-[200px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col w-[200px]">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col w-[200px]">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <div>
          <button className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
