import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const HouseListing = ({ house }) => {
  return (
    <div className="house-listing">
      <div className="house-image-container">
        <img src={house.image[0]} alt={house.title} className="house-image" />
        <div className="house-image-mini-container">
          <img src={house.image[1]} alt={`${house.title} mini 1`} className="house-image-mini" />
          <img src={house.image[2]} alt={`${house.title} mini 2`} className="house-image-mini" />
        </div>
      </div>
{/* Imagenes de las casas*/}


      <div className="house-details">
        <h1 className="house-promotor">{house.promotor}</h1>
        <h2 className="house-price">{house.price} €</h2>
        <p className="house-description">{house.description}</p>
        <div className="container-icons">
          <FontAwesomeIcon icon={Icons.faShower} className="icon" />
          <span className="icon-text"><span className="icon-text">{house.baños}</span></span>
          <FontAwesomeIcon icon={Icons.faSquare} className="icon" />
          <span className="icon-text">{house.metros}m2</span>
          <FontAwesomeIcon icon={Icons.faBed} className="icon" />
          <span className="icon-text">{house.habitaciones}</span>
        </div>
        <p>Precio: {house.price} €</p>
        <p>Ubicación: {house.location}</p>
      </div>
    </div>
  );
};

export default HouseListing;