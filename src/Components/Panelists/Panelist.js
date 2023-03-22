import React, { useState } from 'react';
import './Panelist.css';

const Panelist = ({ title, image, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className={`Panelist ${showDetails ? 'expanded' : ''}`}>
    <div>
    <h3 className="Panelist-title">{title}</h3>
    </div>
    <img className="Panelist-image" src={image} alt={title} />
    <div className="Panelist-details">
    <h3 className="Panelist-title">{title}</h3> 
      <p className="Panelist-text">{description}</p>
      <button className="Panelist-button" onClick={handleDetailsClick}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
    </div>
    {!showDetails && (
      <div className="Panelist-expander" onClick={handleDetailsClick}>
      <button className="card-button" >
      Show Details
    </button>
      </div>
    )}
  </div>
  );
};

export default Panelist;
