import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import { ChessList } from './ChessList';
import { ChessCreate } from './ChessCreate';
import { ChessSingle } from './ChessSingle';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Sakkozók
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chess-create">
                  Új sakkozó
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ChessList />} />
          <Route path="/chess-create" element={<ChessCreate />} />
          <Route path="/chess/:chessId" element={<ChessSingle />} />
        </Routes>
      </div>
    </Router>
  );
};
