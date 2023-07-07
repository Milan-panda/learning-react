/*

  --------------------------------Parcel--------------------------------

 -> (HMR) Hot Module Replacement - Hot Reloading
 -> File Caching Algorithm - and it was written in C++
 -> Bundling
 -> Minification
 -> Cleaning our code
 -> Dev and Production Build
 -> Super Fast Build Algorithms
 -> Image Optimization
 -> Caching while Development
 -> Compression
 -> Compatible with older versions of browsers
 -> To enable HTTPS on dev build   npx parcel index.html --https
 -> Consistent Hashing Algorithms
 -> Zero Configuration

*/


import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {
  id: "heading1"
}, "Heading 1");
const heading2 = React.createElement("h2", {
  id: "heading2"
}, "Heading 2");

const container = React.createElement("div", {
  id: "container"
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
