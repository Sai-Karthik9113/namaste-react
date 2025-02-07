// Example 01: Basic React Structure

// const header = React.createElement(
//   "h1",
//   { id: "header" },
//   "Hello World From React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// Example 02: Complex React Structure
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "List out the h tags"),
    React.createElement("h2", {}, "h1, h2, h3, h4, h5, h6"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      {},
      "Which should be ideally used for the top heading?"
    ),
    React.createElement("h2", {}, "The h1 tag is preferred. "),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
