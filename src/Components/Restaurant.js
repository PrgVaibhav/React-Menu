import React, { useState } from 'react';
import RestaurantNav from './RestaurantNav';
import MenuData from './MenuData';
import Card from './Card';
import './style.css';

// const uniqueList = [
//   ...new Set(
//     MenuData.map((currElem) => {
//       return currElem.category;
//     })
//   ),
// ];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(MenuData);
  //   const [navList, setNavList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(MenuData);
      return;
    }
    const updatedList = MenuData.filter((curEle) => {
      return curEle.category === category;
    });
    console.log(updatedList, menuData);
    setMenuData(updatedList);
  };

  return (
    <>
      <RestaurantNav filterItem={filterItem} />;
      <Card menuData={menuData} />
    </>
  );
};

export default Restaurant;
