import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';
import ConcertPage from './ConcertPage'
import VenuePage from "./VenuePage";
import FestivalPage from "./FestivalPage";

function App() {
  const [page, setPage] = useState('/login')
  const [currentUser, setCurrentUser] = useState(false);
  const [allConcerts, setAllConcerts] = useState([]);
  const [allVenues, setAllVenues] = useState([]);
  const [allFestivals, setAllFestivals] = useState([]);
  const [allFestBands, setAllFestBands] = useState([])
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

  useEffect(() => {
    fetch('http://127.0.0.1:5555/concerts')
    .then(res => res.json())
    .then(data => {
      setAllConcerts(data)
    });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/venues')
    .then(res => res.json())
    .then(data => {
      setAllVenues(data)
    });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/festivals')
    .then(res => res.json())
    .then(data => {
      setAllFestivals(data)
    });
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/festivalbands')
    .then(res => res.json())
    .then(data => {
      setAllFestBands(data)
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
      <Route path='/' element={<Home currentUser={currentUser}/>}></Route>
      <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}></Route>
      <Route path='/concerts' element={<ConcertPage allConcerts={allConcerts} currentUser={currentUser} allVenues={allVenues}/>}></Route>
      <Route path='/festivals' element={<FestivalPage allFestivals={allFestivals} currentUser={currentUser} allFestBands={allFestBands}/>}></Route>
      <Route path='/venues' element={<VenuePage allVenues={allVenues}/>}></Route>
    </Routes>

  </div>
}

export default App;
