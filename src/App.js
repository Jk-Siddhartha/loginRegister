import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
