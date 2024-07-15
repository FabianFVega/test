import React from 'react';

const ItemCard = ({ comic }) => {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <img src={comic.image.medium_url} className="card-img-top" alt={comic.name || "No Image Available"} />
      <div className="card-body">
        <h5 className="card-title">{comic.name || comic.volume.name || "Not title"}</h5>
       
        <a href={comic.site_detail_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">More Details</a>
      </div>
    </div>
  );
};
/* <p className="card-text"><strong>Issue Number:</strong> {comic.issue_number}</p>
        <p className="card-text"><strong>Cover Date:</strong> {comic.cover_date}</p>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: comic.description || "No Description Available" }} />*/

export default ItemCard;

