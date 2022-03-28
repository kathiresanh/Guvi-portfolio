import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import About from './About';
import Projects from './Project';
import Contact from './Contact';

function App() {
  return (
<BrowserRouter>
<div className="container-fluid">
<Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      
      <Route path='/project' element={<Projects></Projects>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
