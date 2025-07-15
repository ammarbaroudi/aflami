
import './creators.css';
import img1 from "../../Assests/CreatorsPic1.png";
import img2 from "../../Assests/CreatorsPic2.png";
import img3 from "../../Assests/CreatorsPic3.png";
import img4 from "../../Assests/CreatorsPic4.png";
import img5 from "../../Assests/CreatorsPic5.png";
import img6 from "../../Assests/CreatorsPic6.png";


const creators = [
  {
    id: 1,
    name: 'Sata Sculpture',
    username: '@Sculptor',
    items: 890,
    image: img1,
  },
  {
    id: 2,
    name: 'Cosmic Art',
    username: '@CosmicArtist',
    items: 1004,
     image: img2,
  },
  {
    id: 3,
    name: 'Josmin Nan',
    username: '@NanoNebula',
    items: 990,
    image: img3,
  },
  {
    id: 4,
    name: 'Binary Bard',
    username: '@BinaryBard',
    items: 1025,
 image: img4,
  },
  {
    id: 5,
    name: 'Pixel Smith',
    username: '@PixelSmithNFT',
    items: 1145,
 image: img5,
  },
  {
    id: 6,
    name: 'Art Wavez',
    username: '@WavezNFT',
    items: 840,
    image: img6,
  },
];

export default function Creators () {
  return (
    <div id='#creators' className="creators-page">
      <h1 className="creators-title">Meet Our Talented Creators</h1>
      <div className="creators-grid">
        {creators.map((creator) => (
          <div key={creator.id} className="creator-card">
            <div className="creator-rank">{creator.id}</div>
            <img src={creator.image} alt={creator.name} className="creator-image" />
            <h2 className="creator-name">{creator.name}</h2>
            <p className="creator-username">{creator.username}</p>
            <p className="creator-items">{creator.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};
