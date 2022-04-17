import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <div>
      
      <h1
        style={{ paddingTop: "3rem", margin: "auto 0", fontWeight: "normal" }}
      >
        <span style={{ fontSize: "50px",fontWeight:'bold' }}>First Class Travel</span>{" "}
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "44px",
            borderBottom: "4px solid #26B584",
          }}
        >
          <Typewriter
            words={[
        
              "Travel Management",
              "Passenger assistance",
              "Consulting!",
              "Technology",
              "Leisure Services",
            ]}
            loop={5}
            cursor
            cursorStyle=" | "
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWritter;
