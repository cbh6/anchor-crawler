import React, { useState } from "react";
import { isValidURL } from "../utils";

function JobInput({ sendJobUrl }) {
  const [inputURL, setInputURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setInputURL(event.target.value);
  };

  const resetForm = () => {
    setInputURL("");
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputURL) return;
    if (!isValidURL(inputURL)) {
      setErrorMessage("Invalid url");
      return;
    }

    resetForm();
    sendJobUrl(inputURL);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p className="error">Error: {errorMessage}</p>}

      <div className="job-input">
        <input
          placeholder="Type a url"
          type="text"
          name="url"
          value={inputURL}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default JobInput;
