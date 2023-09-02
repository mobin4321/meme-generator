import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import Meme from "./Meme";

const Page = () => {
  return (
    <div className="container">
      <div className="window">
        <Header />
        <Meme />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
