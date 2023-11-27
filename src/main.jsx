import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
//import './index.css'
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="green" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      color="red"
      className="test"
      defaultRating={2}
      messages={["terrible", "bad", "watchable", "good", "Fn Amazing!"]}
    />

    <Test />
  </React.StrictMode>
);
