import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [loggedIn,setIsLoggedIn] = useState(false);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    const token = sessionStorage.getItem('token');
    if(!token){
      setIsLoggedIn(true);
    }
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route exact path="/" element={<Main loggedIn={loggedIn}/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
