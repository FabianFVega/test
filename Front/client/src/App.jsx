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

// Componente para mostrar cada cómic
const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card">
      <h2>{comic.name || "No Title Available"}</h2>
      <img src={comic.image.medium_url} alt={comic.name || "No Image Available"} />
      <p><strong>Issue Number:</strong> {comic.issue_number}</p>
      <p><strong>Cover Date:</strong> {comic.cover_date}</p>
      <p dangerouslySetInnerHTML={{ __html: comic.description || "No Description Available" }} />
      <a href={comic.site_detail_url} target="_blank" rel="noopener noreferrer">More Details</a>
    </div>
  );
};

// Componente principal
const App = () => {
  const [comics, setComics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/comics')
      .then((response) => {
        if (response.data.error === "OK") {
          setComics(response.data.results);
        } else {
          setError("Error fetching comics data.");
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="comic-list">
      {comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
};



export default App;

