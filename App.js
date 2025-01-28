// Example 01: Basic React Structure

// const header = React.createElement(
//   "h1",
//   { id: "header" },
//   "Hello World From React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// Example 02: Complex React Structure

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag of first child"),
    React.createElement("h2", {}, "I'm a h2 tag of first child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag of second child"),
    React.createElement("h2", {}, "I'm a h2 tag of second child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
