import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import ItemList from './ItemList';
import MyLogo from './logo';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrincipalList = () => {
  const [comics, setComics] = useState([]);
  const [view, setView] = useState('grid');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/comics')
      .then(response => {
        if (response.data.error === "OK") {
          setComics(response.data.results);
        } else {
          setError("Error fetching comics data.");
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container justify-content-center margin auto">
      <MyLogo/>
      <h1>Take a look for the best animes and comics in the wordl</h1>
      <div className="d-flex justify-content-center p-5">
        <button className="btn btn-primary m-3" onClick={() => setView('grid')}>Grid View</button>
        <button className="btn btn-primary m-3" onClick={() => setView('list')}>List View</button>
      </div>
      <div className={view === 'grid' ? 'row' : 'list-group'}>
        {comics.map(comic =>
          view === 'grid' ? (
            <div key={comic.id} className="col-md-4 justify-content-center align-items-center">
              <ItemCard comic={comic} />
            </div>
          ) : (
            <ItemList key={comic.id} comic={comic} />
          )
        )}
      </div>
    </div>
  );
};

export default PrincipalList;
