import './App.css';
import {Container, Row, Col,} from "react-bootstrap";
import { FiDelete } from 'react-icons/fi';
import { AiFillEdit } from 'react-icons/ai';
import background from "./images/bakgrund1.jpg"
function App() {
  return (
    <div className="App" >
      <Container fluid className="container" >
  <Row>
    <Col ><h1 className="title">  [ Todo App ] </h1>  </Col>
    
       <input className="form"
            type="text"
            name="todo"
            placeholder=" Enter Todo"
            tabIndex="1"
       /> <ul>
       <li className="todo"><AiFillEdit /> &nbsp;  [ Todo1 ] &nbsp; <FiDelete /></li>
       <li className="todo"><AiFillEdit /> &nbsp; [ Todo2 ] &nbsp; <FiDelete /></li>
       <li className="todo"><AiFillEdit /> &nbsp; [ Todo3 ] &nbsp; <FiDelete /></li>
       </ul>
  </Row>
</Container>
    </div>
  );
}

export default App;
