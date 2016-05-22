import React from "react";
import ReactDOM from "react-dom";

import * as api from "./api";

api.entries().then(entries => {
  entries.forEach(entry => {
    console.log(entry);
  });
});

const menu = [
  {
    text: "Ask Sofie",
    image: "",
    link: "./"
  }
];

const MenuItem = props => <a href={props.link}>{props.text}</a>;

const SofieWrites = props => {
  return (
    <div>
      <h1>sofie writes</h1>
      {props.menu.map((item, index) => <MenuItem {...item} key={index} />)}
    </div>
  );
};

ReactDOM.render(
  <SofieWrites menu={menu} />,
  document.getElementById("sofie-writes")
);
