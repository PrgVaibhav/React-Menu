import React from 'react';

const Card = ({ menuData }) => {
  return (
    <div className="container">
      {menuData.map((currEle) => {
        const { id, name, category, image, description } = currEle;
        return (
          <div className="card" key={currEle.id}>
            <span className="card-number card-circle subtle">{id}</span>
            <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
            <img className="card-img-top" src={image} alt="food Image" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
