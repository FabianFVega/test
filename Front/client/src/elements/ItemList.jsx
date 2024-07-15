import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ comic }) => {
  return (
    <div className="list-group-item d-flex">
      <img src={comic.image.medium_url} className="img-thumbnail me-3" alt={comic.name || "No Image Available"} style={{ width: '100px' }} />
      <div>
        <h5>{comic.name || "No Title Available"}</h5>
        <p><strong>Issue Number:</strong> {comic.issue_number}</p>
        <p><strong>Cover Date:</strong> {comic.cover_date}</p>
        <p dangerouslySetInnerHTML={{ __html: comic.description || "No Description Available" }} />
        <a href={comic.site_detail_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">More Details</a>
      </div>
    </div>
  );
};

export default ItemList;
