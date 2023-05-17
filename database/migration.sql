DROP TABLE IF EXISTS Tracks, Albums, Artists, Playlists;

CREATE TABLE Artists(
    id text PRIMARY KEY,
    artist_name text,
    followers int, 
    image text
);

CREATE TABLE Albums(
    id text PRIMARY KEY,
    album_name text,
    year_made int,
    song_amount int,
    total_duration int,
    artist text REFERENCES Artists(id),
    photo text
);

CREATE TABLE Tracks(
    id text PRIMARY KEY,
    name text,
    duration int,
    album text REFERENCES Albums(id),
    artist text REFERENCES Artists(id)
);

CREATE TABLE Playlists(
id text PRIMARY KEY,
    playlist_name text,
    username text,
    song_amount int,
    playlist_duration int,
    song_id text REFERENCES Tracks(id),
    date_added int
);