import React, { useState, useEffect } from "react";

function Home(props) {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  //componetMount
  useEffect(() => {
    console.log("Component Mounted!");
  }, []);

  //componentUpdate
  useEffect(() => {
    console.log("Toggle Updated!");
  }, [toggle]);

  //componentUnmount
  useEffect(() => {
    return () => {
      console.log("Component Unmounted!");
    };
  }, []);

  return (
    <>
      <h1>{props.title}</h1>
      {toggle && (
        <p>
          Hi! This is Maulik Ranadive, A CSE Sophomore Undergraduate Student at
          Ahmedabad Univeristy. This is just a simple website i made in which i
          try my hands on React. Nothing Fancy about the website but this is the
          first time i am using react. Thanks to Devtown and Aditya Gusain for
          teaching and guidign me! There are multiples pages in this website as
          well and i am thinking to work on this website and make it more clean
          and useful. If you have any suggestions or ideas you can just look in
          the Contact page and contact me and you can see my socials at the left
          side too :)
        </p>
      )}
      <button className="viscount" onClick={() => setToggle(!toggle)}>
        {" "}
        <h3>Display content</h3>{" "}
      </button>
      <h1>{number}</h1>
      <button className="viscount" onClick={() => setNumber(number + 1)}>
        {" "}
        <h3>Add 1</h3>
      </button>
    </>
  );
}

export default Home;
