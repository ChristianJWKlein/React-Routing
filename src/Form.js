import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Fill out your info or else</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </>
  );
}

export default Form;
