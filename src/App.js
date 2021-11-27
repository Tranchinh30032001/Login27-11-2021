import React from "react";
import { useState, useEffect } from "react";
import Tours from "./Project/Tours";
import "./App.scss";

function App() {
  const URL = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const Fetch = async () => {
    setLoading(true);
    try {
      const respone = await fetch(URL);
      const data = await respone.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      Fetch();
    }, 2000);
  }, []);
  const notInterested = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };
  useEffect(() => {
    if (tours.length === 0) {
      return (
        <div className="wrapper">
          <h1>No Tours Left</h1>
        </div>
      );
    }
  });
  return (
    <div className="wrapper">
      {loading ? (
        <h1>Loading...</h1>
      ) : tours.length > 0 ? (
        <h1>List Tours</h1>
      ) : (
        <>
          {" "}
          <h1>No Tours Left</h1>{" "}
          <button onClick={() => Fetch()} className="refresh">
            Refresh
          </button>{" "}
        </>
      )}
      <Tours tours={tours} notInterested={notInterested} />
    </div>
  );
}

export default App;
