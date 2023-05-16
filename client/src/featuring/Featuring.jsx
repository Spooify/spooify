import "./Featuring.css";

const Featuring = (props) => {
  const newFeaturingPhoto = new URL(
    "./test_image/breaker.jpeg",
    import.meta.url
  );

  return (
    <div className="featuring">
      <h1 className="featuring_band">Featuring August Burns Red</h1>
      <div className="show_all">Show All</div>
      <div className="new_radio_option">
        <img
          className="new_artist_photo"
          src={newFeaturingPhoto}
          alt="logo"
        ></img>
        <button className="play_artist_button">
          <div className="play_triangle"></div>
        </button>
        <h2 className="radio_name">This is August Burns Red</h2>
        <p className="radio_description">
          This is August Burns Red. The essential tracks all in one playlist{" "}
        </p>
      </div>
    </div>
  );
};
export default Featuring;
