import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode it enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
 document.body.classList.remove('bg-light');
 document.body.classList.remove('bg-dark')
 document.body.classList.remove('bg-warning')
 document.body.classList.remove('bg-danger')
 document.body.classList.remove('bg-success')

  }

  // const toggleMode = () => {
    const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'aqua'  // #042743
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>

      {/* <Navbar title="titleProps" aboutText="about"/> */}
      {/* <Navbar/> */}
      
      {/* <Router> */}
        <Navbar title="Shikha Sharma" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mx-1  my-2">
          {/* <Switch> */}
            {/* /users--> Component 1
               /users/home --->---> Component 
            exact not use so react do a partial matching and use exact so at the time react do exact matching.*/}
            {/* <Route exact path="/about">      
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter to text in this Box" mode={mode} />
            </Route> */}
          {/* </Switch> */}
          </div>
      {/* </Router> */}
          <TextForm showAlert={showAlert} heading=<h2>"Try TestUtils - Word counter, Character counter, Remove extraspaces"</h2>/>  
       <About mode={mode} /> 
       

    </>
  );
}

export default App;
