import React, { useState } from 'react';
// import './AddressForm.css'; // Import the CSS file for styling

const AddressForm = () => {
  const [selectedOption, setSelectedOption] = useState('address');
  const [inputValue, setInputValue] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${selectedOption}: ${inputValue}`);
    // You can add further logic here to store the selected option and input value as needed
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <h1>Address Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="selectOption">Select Option:</label>
        <select id="selectOption" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="name">Name</option>
          <option value="address">Address</option>
        </select>
        <label htmlFor="inputValue">{selectedOption === 'name' ? 'Name' : 'Address'}:</label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default AddressForm;
