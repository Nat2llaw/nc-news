import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Articles from './components/article/Articles'
import Comments from './components/article/Comments'
import DeleteComment from './components/article/DeleteComment'
import SingleArticle from './components/article/SingleArticle'
import Header from './components/Header'
import Home from './components/Home'
import Nav from './components/Nav'
import Topics from './components/topic/Topics'
import Users from './components/Users'


const App = () => {
  const [users, setUsers] = useState(null);
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Users users={users} setUsers={setUsers} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route
            path="/articles/topic/:selectedtopic"
            element={<Topics />}
          ></Route>
          <Route path="/articles/:id" element={<SingleArticle />}></Route>
          <Route
            path="/articles/:id/comments"
            element={<Comments users={users} />}
          ></Route>
          <Route
            path="/articles/sortby/:sort/order/:order"
            element={<Articles />}
          ></Route>
          <Route
            path="/articles/:article_id/comments"
            element={<DeleteComment />}
          ></Route>
          <Route
            path="/articles/topic/:selectedtopic/sortby/:sort/order/:order"
            element={<Topics />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App