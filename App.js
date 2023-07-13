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
 -> Tree Shaking - Removing unwanted code

*/

import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", {
//   id: "heading1",
//   key: "h1"
// }, "Heading 1");
// //React.createElement => Object => HTML(DOM)
// console.log(heading1);

// const heading2 = React.createElement("h2", {
//   id: "heading2",
//   key: "h2"
// }, "Heading 2");

// const container = React.createElement("div", {
//   id: "container"
// }, [heading1, heading2]);

//JSX
const title = (
  <h1 id="h3" key="h3">
    Hello Folks!!!
  </h1>
);

// React Component
// - Functional Component
const HeadingComponent = () => {
  return (
    <div>
      {title}
      <h1>This is H1</h1>
      <h2>This is H2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading3);
root.render(<HeadingComponent/>);
