import React, {useContext} from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {

  const {user} = useContext(UserContext); 

  return <h4 className="p-3 font-bold">This site designed and made by {user.name} - {user.email}</h4>;
};

export default Footer;
