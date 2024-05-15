import React from "react";
import "../styles/Events.css";
import Teaparty from "../assets/teaparty.png";

function Events() {
  return (
    <div>
      <h1 className="eventsTitle">Our Tea Events 🫖 </h1>
      <div>
        <p className="eventsParagraph">First Event:</p>
      </div>
      <div className="imageEvent">
        <img src={Teaparty} styles={"400px"} alt="First Event" />
      </div>
    </div>
  );
}

export default Events;
