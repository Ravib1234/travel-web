// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { fetchDestinations } from "./fakeApi";

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Use the fake API to fetch destinations
    fetchDestinations().then((data) => setDestinations(data));
  }, []);

  return (
    <div className="App">
      <h1>Travel Destinations</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
