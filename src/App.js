import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/SideBar';
import Today from "./components/Today/Today"
import Prompts from './components/Prompts/Prompts';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <Router>
            <div className='col-md-3 p-0'>
              <Sidebar />
            </div>
            <div className='col-md-9 good-evening'>
              <Routes>
                <Route path="/" element={<Today />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/prompt" element={<Prompts />} />

              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
