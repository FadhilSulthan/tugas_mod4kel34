
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tugas from "../src/pages/tugas/index";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>

            <li>
              <Link to="/tugas">tugas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route path="/tugas" exact element={<Tugas />}></Route>
        </Routes>
      </Router>
    </>


  );
}

export default App;
