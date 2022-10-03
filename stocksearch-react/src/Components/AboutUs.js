import React from "react";
import person1 from "./Assets/person-1.jpg";
import person2 from "./Assets/person-2.jpg";
import person3 from "./Assets/person-3.jpg";
import person4 from "./Assets/person-4.jpg";
import "./Aboutus.css"

export default function Aboutus() {
    return (
      <section className="section--1" id="about">
      <h1>Our <span className="src"> Team Members...</span></h1>
      <div className="team-1">
        <img src={person1} alt="" />
        <div className="about--team-1">
          <h1>Pablo Chocobar</h1>
          <h2>Software Engineer, <span className="src"> Lorem, ipsum.</span></h2>
          <h3>
            Lorem ipsum dolor sit. Lorem, ipsum dolor.
            <span className="src">Lorem, ipsum dolor.</span>
          </h3>
        </div>
      </div>
      <div className="team-2">
        <div className="about--team-2">
          <h1>Prashant Coomer</h1>
          <h2>Asst. Engineer, <span className="src"> Lorem, ipsum.</span></h2>
          <h3>
            Lorem ipsum dolor sit amet. Lorem, ipsum Lorem ipsum dolor sit.
            <span className="src">Lorem ipsum dolor Lorem, ipsum dolor.</span>
          </h3>
        </div>
        <img src={person4}  alt="" className="img--hide-2" />
      </div>

      <div className="team-3">
        <img src={person2}  alt="" />
        <div className="about--team-3">
          <h1>Chin Choo Lee Lui</h1>
          <h2>UI/UX Engineer, <span className="src"> Lorem, ipsum.</span></h2>
          <h3>
            Lorem ipsum dolor sit amet. Lorem, ipsum.
            <span className="src">Lorem ipsum dolor sit lorem.</span>
          </h3>
        </div>
      </div>
      <div className="team-4">
        <div className="about--team-4">
          <h1>Ben Dover</h1>
          <h2>Backend Engineer, <span className="src"> Lorem, ipsum.</span></h2>
          <h3>
            Lorem ipsum dolor sit amet.
            <span className="src">Lorem ipsum dolor sit.</span>
          </h3>
        </div>
        <img src={person3}  alt="" className="img--hide-2" />
      </div>
    </section>
    );
}