import "./FansAlsoLike.css";

const FansAlsoLike = (props) => {

  const newArtistPhoto = new URL('./test_image/images.jpeg', import.meta.url);

  return (
    <div className="fans_also_like">
      <h1 className="fans_also_like_header">Fans Also Like</h1>
      <div className="show_all">Show All</div>
      <div className="new_artist_option">
        <img
          className="new_artist_photo"
          src={newArtistPhoto}
          alt="logo"
        ></img>
        <button className="play_artist_button">
          <div className="play_triangle"></div>
        </button>
        <h2 className="artist_name">Arist Name</h2>
        <p className="artist_description">Arist</p>
      </div>
    </div>
  );
};
export default FansAlsoLike;
