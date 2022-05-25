import './App.css';
import { Container, Row, Col, } from "react-bootstrap";

import { GiClick } from "react-icons/gi"
import { MdOutlineDone} from "react-icons/md"
import {ImCross} from "react-icons/im"
import React, { useState, useEffect } from "react";
import axios from 'axios';



function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");



  /* useEffect(() => {
    fetch('http://localhost:5000/todos')
    
    .then(res=>res.json())
    .then(json=>console.log(json))
    .then(json =>setTodos(json.todo))
  
    
  }, [])*/


  function newTodo() {
    fetch('http://localhost:5000/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          todo: title
        }
      )
    })
    .then(() => {
      getTodos();
    })

  }
  function handleSubmit(e) {
    e.preventDefault();
    newTodo(title);

  }

  /*      function submitTodo() {
          newTodo(setTitle);
        } */
  /*       fetch(`http://localhost:5000/todos/${id}`,{
           method:"PUT",
           body:JSON.stringify(
               {
                   todo: "Böla"
               }
           )
       })
           .then(res=>res.json())
           .then(json=>console.log(json))
*/

  function handleUpdate(id) {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(
        {
          completed: true
        }
      )
    })
      .then(() => {
        getTodos();
      })
  }

  function handleDelete(id) {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        getTodos();
      })
  }

  function getTodos() {
    axios
      .get("http://localhost:5000/todos")
      .then((response) => {

        setTodos(response.data);
        
      })
      .catch((error) => console.log(error));
    console.log("data laddades in")


  }

  useEffect(() => {
    getTodos();
  }, []);


  return (


    <div className="App" >
      <Container fluid className="container" >
        <Row>
          <Col ><h1 className="title">  [ Todo App ] </h1>  </Col>
          <form onSubmit={handleSubmit}>
            <input className="form"
              type="text"
              name="todo"
              placeholder=" Enter Todo"
              tabIndex="1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className='todo-button'
            >
              <GiClick className="click-picture" />
            </button>
          </form>
          <ul className="todos">
            {todos.map(todo => (
              <li key={todo.id} className="text"><button className={todo.completed ? "done" : "notDone"} onClick={() => handleUpdate(todo.id)}><MdOutlineDone /></button> {todo.todo} <button className="deleteButton" onClick={() => handleDelete(todo.id)}><ImCross /></button></li>
            ))}
          </ul>

        </Row>
      </Container>
    </div>
  );
}

export default App;

