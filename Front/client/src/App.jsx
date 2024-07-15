// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './elements/ItemCard';
import ItemList from './elements/ItemList';
import Navbar from './elements/nav'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
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
    <div className="container mt-4 justify-content-center">
      <Navbar />
      <div className="d-flex justify-content-center  ">
        <button className="btn btn-primary" onClick={() => setView('grid')}>Grid View</button>
        <button className="btn btn-primary" onClick={() => setView('list')}>List View</button>
      </div>
      <div className={view === 'grid' ? 'row' : 'list-group'}>
        {comics.map(comic =>
          view === 'grid' ? (
            <div key={comic.id} className="col-md-4">
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

export default App;
