import './App.css';
import Home from './screens/Home';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './screens/Login';

import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <div className="fs-1">
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
