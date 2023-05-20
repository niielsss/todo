import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import ExtraPage from './pages/ExtraPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Global from './context/GlobalState';

function App() {
  return (
    <Global Root={() => Root()} />
  )

  function Root() {
    return (
      <div className="App">
        <CssBaseline />

        <Router>
          <Navbar>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/todo-list' element={<TodoPage />}></Route>
              <Route path='/extra' element={<ExtraPage />}></Route>
            </Routes>
          </Navbar>

        </Router>
      </div>
    );
  }
}

export default App;