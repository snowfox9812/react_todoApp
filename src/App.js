import React  from 'react';
import './App.css';
import { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AddToDoList from './AddToDoList.js';
import Home from './Home.js';
import NotFound from './NotFound.js';
let temp = 0;


function App() {
    // const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

  function TodoItem({ id, item, onCheck }) {
    return (
        <>
        <li className="list-group-item">
            {item}
        </li>
        </>
    )
  }
    function addItem(event) {
        setItems(prevData => {
          if (input === "") {
            alert("Not null");
            return [...prevData];
          }else return [...prevData, input];
        });
        setInput("");
    }
  function TodoItemHome({ id, item, onCheck, onUpdate, onPopUp }) {
    // console.log(id);
    return (
        <>
        <li className="list-group-item">
            {item}
            <button className="btn btn-outline-dark float-right mx-2" id="delete-btn" onClick={() => {
                onCheck(id)
                alert('Are you sure?')
              }}>Done this task</button>
            <button className="btn btn-outline-dark float-right mx-2" id="modify-btn" onClick={() => {
               onPopUp(id)
            }}>Modify this task</button>
        </li>
        </>
    )
  }

const handleSubmit = (event) => {
    event.preventDefault();
  }

  function removeItem(id) {
      setItems(prevData => {
          return prevData.filter((item, index) => {
              return index !== id;
          })
      });
  }

  const openDialog = id => {
    document.getElementById('dialog-change').style.display = 'block';
    temp = id;
    setInput(items[temp]);

    // console.log(temp);
    // return temp;

  }
  // console.log(temp);
  const updateItem = (event) => {
    var temp2 = [...items];
    temp2.splice(temp, 1, input);
    setItems(temp2);
    setInput(items[temp]);
    document.getElementById('dialog-change').style.display = 'none';
    // console.log(items[temp]);
  }

  return (
    <div className="bg-info text-white text-center p-4">
        <div className="my-3 py-3">
            <h1 className="header">Todo List</h1>
          </div>
        <Router>
            <div>
              <div>
                <Link to = "/"> 
                    <button className="btn btn-info">
                          Home
                    </button>
                  </Link>
                <Link to="/add">
                    <button className="btn btn-info">
                          Add to do list
                    </button>
                </Link> 
              </div>

              <Switch>
                <Route exact path="/">
                  <Home input= {input} items={items} setItems={setItems} TodoItemHome={TodoItemHome} removeItem={removeItem} updateItem={updateItem} openDialog= {openDialog} handleSubmit= {handleSubmit} setInput={setInput}/>
                </Route>
                <Route path="/add">
                  <AddToDoList items={items} setItems={setItems} TodoItem={TodoItem} input={input} setInput={setInput} addItem={addItem} handleSubmit={handleSubmit}/>
                </Route>  
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>
    </div>
  );
}

export default App;
