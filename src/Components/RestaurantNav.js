import React from 'react';

const RestaurantNav = ({ filterItem }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="nav nav-pills mx-auto">
        <li className="nav-item">
          <button className="nav-link" onClick={() => filterItem('All')}>
            All
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link" onClick={() => filterItem('Lunch')}>
            Lunch
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => filterItem('Snacks')}>
            Snacks
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => filterItem('Dinner')}>
            Dinner
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default RestaurantNav;
