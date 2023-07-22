import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant, { useRestaurantMenu } from "../../utils/useRestaurant";

const RestaurantMenu = () => {
  // How to read a dynamic URL params
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  const restaurantMenu = useRestaurantMenu(resId);

  console.log(restaurant?.name);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwo}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {restaurantMenu?.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
