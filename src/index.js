import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="John Smith"
      src="https://ddnews.gov.in/sites/default/files/styles/medium/public/smith_1.jpg?itok=c5qtOZlm"
      tel="+123 456 789"
      email="will@smith.com"
    />
  </div>,
  document.getElementById("root")
);
