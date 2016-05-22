var React = require("react");
var ReactDOM = require("react-dom");

var menu = [
  {
    text: "Ask Sofie",
    image: "",
    link: "./"
  }
];

var MenuItem = React.createClass({
  render: function () {
    return <a href={this.props.link}>{this.props.text}</a>
  }
});

var SofieWrites = React.createClass({
  render: function () {
    return (
      <div>
        <h1>sofie writes</h1>
        {this.props.menu.map((item, index) =>
          <MenuItem {...item} key={index} />
        )}
      </div>
    );
  }
});

ReactDOM.render(
  <SofieWrites menu={menu} />,
  document.getElementById("sofie-writes")
);
