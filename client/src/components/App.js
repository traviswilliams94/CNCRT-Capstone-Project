import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';

function App() {
  const [page, setPage] = useState('/login')
  const [ currentUser, setCurrentUser ] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("/check_session")
      .then((r) => {
        if (r.ok) {
          r.json()
          .then((currentUser) => setCurrentUser(currentUser)
          )}
      });
  }, []);

  const handleLogout = () => {
    fetch("/logout", {method: "DELETE"})
      .then((r) => {
        if (r.ok) {
          setCurrentUser(false)
        }
        navigate('/login')
      })
    }

    if (!currentUser) return <Login setCurrentUser={setCurrentUser}/>

  return <div className="App">
    <NavBar onChangePage={setPage} handleLogout={handleLogout}/>
    <Routes>
      <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}></Route>
      <Route path='/' element={<Home currentUser={currentUser}/>}></Route>
    </Routes>

  </div>
}

export default App;
