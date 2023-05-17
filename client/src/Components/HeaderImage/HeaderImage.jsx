import React, {useEffect, useState} from "react";
import "./HeaderImage.css";

const HeaderImage = () => {
  const [albums_data, setAlbums_data] = useState([]);
  
  useEffect(() => {
    const url = 'http://localhost:4000/api/artists/0TnOYISbd1XYRBk9myaseg/albums';

    const fetchData = () => {
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          setAlbums_data(data);
          // console.log(albums_data)
        })
        .catch((error) => console.log("error", error));
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src={albums_data[1].photo} alt="" />
      
    </div>
  );
}

export default HeaderImage;