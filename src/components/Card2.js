import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards2() {
  return (
    <div className="cards">
      <h1>All Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/port1.jpg"
              text="APImpact - 
              It A web application with a refreshing user interface and energising style that displays content from APIs, like OMDB (movies), Jikan (anime), etc. that enables users to discover the vastness of API content."
              label="ReactJS"
              path="/projects"
            />
            <CardItem
              src="images/port2.jpg"
              text="ShopMax - 
              A full fledged web application containing all the necessary e-commerce features along with user, admin accesses and payment gateway."
              label="MERN"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/port3.jpg"
              text="SalonSphere - 
              A slot booking system for saloons and their patrons that streamlines the booking procedure and offers all the essential features, as well as real time estimates for each service and waiting times."
              label="Vanilla web dev and Python"
              path="/projects"
            />
            <CardItem
              src="images/port4.jpg"
              text="InventoMax - 
              A simple fullstack(MERN) e-commerce-dashboard"
              label="MERN"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/port5.jpg"
              text="Algorithms - Java - 
              Java Codes for some common and famous algorithms features, as well as real time estimates for each service and waiting times."
              label="Java"
              path="/projects"
            />
            <CardItem
              src="images/port6.jpg"
              text="Simple Calculator - 
              This is a simple calculator"
              label="Java"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
