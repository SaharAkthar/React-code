
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React,{ useState } from 'react';
import Alert from './Component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function Myapp() {
  const [mode,setMode]= useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
const toggleHandler=()=>{
  if(mode==='dark')
  {
    setMode('light')
    document.body.style.backgroundColor = "white";
    document.title="TextUtil - Light"
    showAlert("Light Mode Enabled","success")
  }
  else
  {
    setMode('dark')
    document.body.style.backgroundColor = "#042743";
    document.title="TextUtil - Dark"
    showAlert("Light Mode Enabled","success")

  }
}
  return (
    <div>
      {/* <Router> */}
   <Navbar title="Navbar" mode={mode} toggleHandler={toggleHandler}></Navbar>
   <Alert alert={alert}></Alert>
   <div className='container my-3'>
   {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter the text to Analyse" mode={mode}></Textform>
          {/* </Route>
        </Switch> */}
  </div>
  {/* </Router> */}
  </div>
    )
}

export default Myapp;