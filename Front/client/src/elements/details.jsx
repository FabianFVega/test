import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetail = (comic, comicId) => {
  const { id } = useParams(); // Obtener el ID de la URL
  

  return (
    <div>
      <h1>{comic.name}</h1>
      <p>{comic.description}</p>
      <img src={comic.image.medium_url} alt={item.name} /> {/* Ajusta según tu JSON */}
    </div>
  );
};

export default ItemDetail;
