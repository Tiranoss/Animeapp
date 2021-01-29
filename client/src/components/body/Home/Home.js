import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";

const Home = () => {
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();

      try {
        console.log(data);
        setLoading(false);
        setAnime(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="home-container">
      <div className="col-1">
        <input
          className="Search-bar"
          type="text"
          placeholder="Enter name anime....."
          id="search"
          name="Search"
        />
        <div>
          {loading ? (
            <div>Loading</div>
          ) : (
            <div className="card-all">
              {anime.map((data) => (
                <div className="card" key={data._id}>
                  <div className="front">
                    <img
                      src={data.image}
                      alt={data.name}
                      width="200"
                      height="250"
                    />
                  </div>
                  <div className="back">
                    <div className="circle">
                      <span className="circle-left">{data.years}</span>
                      <span className="circle-right">{data.episodes}</span>
                      <h1>{data.name}</h1>
                    </div>
                    <button className="card-info">
                      <Link to="/{data.id}">
                        <h2>Watch Trailer</h2>
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
