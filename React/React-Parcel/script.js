import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

// React Element
// const paragraphElement = React.createElement("p",null,"Hello World React");

// JSX -> HTML OR XMK LIKE Syntax
// JSX --> BABEL --> React.createElement() --> JSON Object --> HTML
const paraElement = <p>Hello World JSX</p>;

console.log(paraElement); // JSON Object

// Components
const Header = () => {
  return (
    <div>
      <p className="paragraph">Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>

      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
      <p>Hello World - Header</p>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>

      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
      <p>Hello World - Footer</p>
    </>
  )
}

const Body = () => {
  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);