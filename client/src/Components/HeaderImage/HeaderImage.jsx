import React, {useEffect, useState} from "react";
import "./HeaderImage.css";




const HeaderImage = () => {
  const [albums_data, setAlbums_data] = useState([]);
  const [artist , setArtist] = useState("");

  
  useEffect(() => {
    const url = `http://localhost:4000/api/albums/`;

    const fetchData = () => {
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setAlbums_data(data);
        })
        .catch((error) => console.log("error", error));
    };

    fetchData();
  }, []);
  console.log(albums_data)

  return (
    <div>
      {/* {album[num]} */}
    </div>
  );
}

export default HeaderImage;