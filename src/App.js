import React, { useState } from "react";
import "./App.css";

const ChildComponent = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

const App = () => {
  const [name, setName] = useState("World");

  const handleChangeName = () => {
    setName("React Developer");
  };

  return (
    <div className="App">
      <h1>Debug Sample App</h1>
      <ChildComponent name={name} />
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

export default App;
