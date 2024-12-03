import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ChessList = () => {
  const [isPending, setPending] = useState(false);
  const [chesses, setChesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await axios.get('https://chess.sulla.hu/chess');
        setChesses(response.data);
      } catch (error) {
        console.error('Hiba történt az adatok lekérésekor:', error);
      } finally {
        setPending(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container py-4">
      {isPending ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Betöltés...</span>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <h2 className="text-center mb-4">Sakkozók</h2>
          {chesses.map((chess) => (
            <div className="card col-sm-3 m-2 p-3" key={chess.id}>
              <img
                src={chess.image_url || 'https://via.placeholder.com/400x800'}
                alt={chess.name}
                className="card-img-top img-fluid"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{chess.name}</h5>
                <p className="card-text">Születési év: {chess.birth_date}</p>
                <p className="card-text">Világbajnokságok: {chess.world_ch_won}</p>
                <Link
                  to={chess.profile_url}
                  target="_blank"
                  className="btn btn-primary btn-sm me-2"
                >
                  Profil
                </Link>
                <Link to={`/chess/${chess.id}`} className="btn btn-secondary btn-sm">
                  Részletek
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
