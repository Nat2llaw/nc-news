import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Articles from './components/Articles'
import Header from './components/Header'
import Home from './components/Home'
import Nav from './components/Nav'
import Topics from './components/Topics'
import Users from './components/Users'


const App = () => {
  const [users, setUsers] = useState(null);
  const [topic, setTopic] = useState(null)
  return (
    <>
      <BrowserRouter>
      <Header />
      <Nav />
      <Users users={users} setUsers={setUsers} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/topics" element={<Topics topic={topic} setTopic={setTopic} />}></Route>
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App