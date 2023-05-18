DROP TABLE IF EXISTS Tracks, Albums, Artists, Playlists;

CREATE TABLE Artists(
    artist_id text PRIMARY KEY,
    artist_name text,
    followers int, 
    image text
);

CREATE TABLE Albums(
    album_id text PRIMARY KEY,
    album_name text,
    year_made int,
    song_amount int,
    total_duration int,
    artist_id text REFERENCES Artists(artist_id),
    photo text
);

CREATE TABLE Tracks(
    track_id text PRIMARY KEY,
    name text,
    duration int,
    album_id text REFERENCES Albums(album_id),
    artist_id text REFERENCES Artists(artist_id),
    featured_artist text REFERENCES Artists(artist_id)
);

CREATE TABLE Playlists(
playlist_id text PRIMARY KEY,
    playlist_name text,
    username text,
    song_amount int,
    playlist_duration int,
    track_id text REFERENCES Tracks(track_id),
    date_added int
);