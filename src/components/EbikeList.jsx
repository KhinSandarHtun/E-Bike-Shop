import React, { useState, useEffect } from "react";
import EbikeCard from "./EbikeCard";

const images = [
  "./src/assets/image/EcoRide X1.png",
  "./src/assets/image/GreenBike Pro.png",
  "./src/assets/image/CityGlide E-Bike.png",
  "./src/assets/image/VoltRide Turbo.png", 
  "./src/assets/image/PowerGlide Z2.png",
  "./src/assets/image/EcoRide X1.png",// Ensure this array matches the number of e-bikes or handle cases where they differ
  
];

const EbikeList = () => {
  const [ebikes, setEbikes] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/abd6f2f4-7c97-43e2-8afc-2d7e4cc1440c")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Inspect the structure
        const ebikeData = data.data.map((ebike, index) => ({
          ...ebike,
          src: images[index] || "./src/assets/image/default-image.png" // Fallback image if out 
        }));
        setEbikes(ebikeData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // console.log("ebike",ebikes);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10 gap-6">
      {ebikes.length > 0 ? (
        ebikes.map((ebike) => <EbikeCard key={ebike.id} ebike={ebike} />)
      ) : (
        <p>No E-bikes available.</p>
      )}
    </div>
  );
};

export default EbikeList;
