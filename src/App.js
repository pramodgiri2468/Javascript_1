import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const new_value = e.target.value;
    setValue(new_value);
  };

  const addTodo = () => {
    // Check if the input value is not empty before adding it to todos
    if (value) {
      setTodos([...todos, value]);
      setValue(""); // Clear the input field after adding a todo
    }
  };

  return (
    <div>
      <div className='container'>
        <h1 className='heading'>To do list</h1>
        <div className='input-container'>
          <input type='text' value={value} onChange={handleChange} />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
          <ol>
            {todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
