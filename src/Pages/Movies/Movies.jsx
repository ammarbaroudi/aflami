import React from "react";
import "./movies.css";
import img1 from "../../Assests/MoviePic1.png";
import img2 from "../../Assests/MoviePic2.png";
import img3 from "../../Assests/MoviePic3.png";
import img4 from "../../Assests/MoviePic4.png";
import img5 from "../../Assests/MoviePic5.png";
import img6 from "../../Assests/MoviePic6.png";
import img7 from "../../Assests/MoviePic7.png";
import img8 from "../../Assests/MoviePic8.png";
import img9 from "../../Assests/MoviePic9.png";
import img10 from "../../Assests/MoviePic10.png";

const moviesData = [
  {
    title: "Iron Man",
    authors: ["@CosmicArtisan", "@Sculptor"],
    image: img1,
  },
  {
    title: "Feline Brushstrokes",
    authors: ["@Robotica", "@MysticInk"],
    image: img2,
  },
  {
    title: "Illuminated Enigma",
    authors: ["@EtherFlow", "@NanoNebula"],
    image: img3,
  },
  {
    title: "Charmingly Fluffed",
    authors: ["@LunarArt", "@Robotica"],
    image: img4,
  },
  {
    title: "Rosa Vista Realm",
    authors: ["@CosmicArtisan", "@Sculptor"],
    image: img5,
  },
  {
    title: "Gilded Ebony",
    authors: ["@Robotica", "@MysticInk"],
    image: img6,
  },
  {
    title: "Hazy Hue Wolf",
    authors: ["@EtherFlow", "@NanoNebula"],
    image: img7,
  },
  {
    title: "Pint-Sized Voyager",
    authors: ["@BinaryBard"],
    image: img8,
  },
  {
    title: "Poker",
    authors: ["@LunarArt", "@Robotica"],
    image: img9,
  },
  {
    title: "Pint-Sized Voyager",
    authors: ["@BinaryBard"],
    image: img10,
  },
];

export default function Movies() {
  return (
    <>
     <div className="hero">
  <div className="overlay" />
  <h1>All Movies</h1>
</div>


      <div className="movies-section">
        <h2 className="section-title">All NFTs</h2>
        <div className="card-grid">
          {moviesData.map((item, index) => (
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
      </div>

    </>
  );
}
