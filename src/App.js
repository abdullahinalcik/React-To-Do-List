import "./App.css";
import List from "./componenets/List";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = {
      id: new Date().getTime(),
      text: text,
      checked: false,
    };
    console.log(newList);
   newList.text? setList([...list, newList]):alert("Please, enter a task!")
    console.log(list);
    setText("");
  };

  

  return (
    <div className="container">
      <main className="app">
        <h1>TO DO LIST</h1>
        <form id="todo-form" onSubmit={handleSubmit}>
          <input
            id="todo-input"
            type="text"
            placeholder="Add new task..."
            value={text}
            onChange={(e) => handleChange(e)}
          />
          <button id="todo-btn" type="submit">
            +
          </button>
        </form>
        <section className="todos">
          <ul id="todo-ul">
           
            <List list={list} setList={setList} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
