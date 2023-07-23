import React, { useEffect, useState, useContext } from "react";
import { RestaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // * to create state variable
  const {user, setUser} = useContext(UserContext)

  // * empty dependency array => once after render
  // * dep. array [searchText] => once after render + every time after render (my searchText changes)

  useEffect(() => {
    // ! We should call our API's here
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4922142&lng=77.3236034&&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // const isOnline = useOnline();
  // if(!isOnline){
  //   return <h1>Offline, Please check your internet connection</h1>
  // }

  // *Conditional Rendering
  // if restaurant is empty => Shimmer UI
  // if restaurant has data => actual data UI

  // ! not render component (Early Return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50  p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input className="mx-2" value={user.name} onChange={e => setUser({
          ...user,
          name: e.target.value,
        })}/>
        <input className="mx-2" value={user.email} onChange={e => setUser({
          ...user,
          email: e.target.value,
        })}/>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Found!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
