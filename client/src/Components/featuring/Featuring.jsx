import "./Featuring.css";

const Featuring = (props) => {
  const newFeaturingPhoto = new URL(
    "./test_image/breaker.jpeg",
    import.meta.url
  );

  return (
    <div className="container">
    <div className="fans_also_like">
      <div className="title">
        <h1 className="fans_also_like_header">Featuring August Burns Red</h1>
        <div className="show_all">Show All</div>
      </div>
      <div className="new_artist_option">
        <img
          className="new_artist_photo"
          src={newFeaturingPhoto}
          alt="logo"
        ></img>
        <button className="play_artist_button">
          <div className="play_triangle"></div>
        </button>
        <h2 className="artist_name">This is August Burns Red</h2>
        <p className="artist_description">
          This is August Burns Red. The essential tracks all in one playlist{" "}
        </p>
      </div>
    </div>
    </div>
  );
};
export default Featuring;
