const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    {id: "child"},[
      React.createElement("h1", {}, "this is 1st h1 tag"),
      React.createElement("h2", {}, "this is 1st h2 tag")
    ]
  ),
  React.createElement(
    "div",
    {id: "child2"},[
      React.createElement("h1", {}, "this is 2nd h1 tag"),
      React.createElement("h2", {}, "this is 2nd h2 tag")
    ]
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
