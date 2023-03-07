import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/employee">Employee</Link>
            </li>
            <li>
              <Link to="/department">Department</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <div className="App">
          <Outlet />
        </div>  
      </>
  );
}

export default App;
