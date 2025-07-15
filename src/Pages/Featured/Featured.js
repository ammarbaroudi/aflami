import React from "react";
import "./featured.css";
import { useNavigate } from "react-router-dom";


const featuredItems = [
  {
    title: "Iron Man",
    authors: ["@CosmicArtisan", "@Sculptor"],
image: require("../../Assests/Featured1.jpg"),
  },
  {
    title: "Feline Brushstrokes",
    authors: ["@Robotica", "@MysticInk"],
    image: require("../../Assests/Featured2.jpg"),
  },
  {
    title: "Illuminated Enigma",
    authors: ["@EtherFlow", "@NanoNebula"],
    image: require("../../Assests/Featured3.jpg"),
  },
  {
    title: "Charmingly Fluffed",
    authors: ["@LunarArt", "@Robotica"],
    image: require("../../Assests/Featured4.jpg"),
  },
];

export default function Featured() {
  const navigate = useNavigate();
  return (
    <div id="featured" className="featured-page">
      <h2 className="featured-title">Featured NFTs</h2>

      <div className="card-grid">
        {featuredItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-authors">
                {item.authors.map((author, i) => (
                  <span key={i}>
                    {author}
                    {i < item.authors.length - 1 ? " , " : ""}
                  </span>
                ))}
              </p>
              <hr />
              <button className="card-btn">Place a Bid</button>
            </div>
          </div>
        ))}
      </div>


<button className="show-more-btn" onClick={() => navigate("/movies")}>
  Show all Movies
</button>

    </div>
  );
}
