import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../src/constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    // console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  //return restaurant data
  return restaurant;
};

export const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    // console.log(json);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  //return restaurant data
  return restaurantMenu;
};

export default useRestaurant;
