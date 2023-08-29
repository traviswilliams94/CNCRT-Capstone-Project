import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';
import ConcertPage from './ConcertPage';
import VenuePage from "./VenuePage";
import FestivalPage from "./FestivalPage";
import AccountPage from "./AccountPage";
import ConcertBuddies from "./ConcertBuddies";
import { useRecoilState } from "recoil";
import { allVenuesAtom, festBandsAtom } from "../lib/atoms";

function App() {
  const [page, setPage] = useState('/login')
  const [currentUser, setCurrentUser] = useState(false);
  const [allUsers, setAllUsers] = useState([])
  const [allConcerts, setAllConcerts] = useState([]);
  const [allVenues, setAllVenues] = useRecoilState(allVenuesAtom);
  const [allFestivals, setAllFestivals] = useState([]);
  const [allFestBands, setAllFestBands] = useRecoilState(festBandsAtom)
  const navigate = useNavigate();

  const userConcerts = allConcerts.filter(
    (concert) => concert.user.id === currentUser.id
);

const userFestivals = allFestivals.filter(
  (festival) => festival.user.id === currentUser.id
);


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

  useEffect(() => {
    fetch('http://127.0.0.1:5555/users')
    .then(res => res.json())
    .then(data => {
      setAllUsers(data)
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
    <NavBar onChangePage={setPage} />
    <Routes>
      <Route path='/' element={<Home currentUser={currentUser} userConcerts={userConcerts} userFestivals={userFestivals} />}></Route>
      <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>}></Route>
      <Route path='/concerts' element={<ConcertPage userConcerts={userConcerts} currentUser={currentUser} />}></Route>
      <Route path='/festivals' element={<FestivalPage userFestivals={userFestivals} currentUser={currentUser} />}></Route>
      <Route path='/venues' element={<VenuePage />}></Route>
      <Route path='/concertbuddies' element={<ConcertBuddies allUsers={allUsers} allConcerts={allConcerts} allFestivals={allFestivals} />}></Route>
      <Route path='/account' element={<AccountPage currentUser={currentUser} userConcerts={userConcerts} userFestivals={userFestivals} handleLogout={handleLogout}/>}></Route>
    </Routes>

  </div>
}

export default App;
