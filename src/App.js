import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [Mode, setMode] = useState('light'); // For dark mode 
  const [alert, setAlert] = useState(null); // For alerts 

  const showAlert = (msg, typ) => {
    setAlert({
      message: msg,
      type: typ
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f2246';
      showAlert("Dark Mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={Mode} toggleDark={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <Routes>
        <Route exact path='/' element={<TextForm heading="Enter your text to analyse:" mode={Mode} showAlert={showAlert} />} />
        <Route exact path='/about' element={<About mode={Mode} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
