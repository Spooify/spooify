DROP TABLE IF EXISTS Tracks;

CREATE TABLE Tracks(
    id PRIMARY KEY,
    name text,
    duration text,
    plays integer,
    album text FOREIGN KEY REFERENCES Albums(album_name),
    artist text FOREIGN KEY REFERENCES Artists(artist_name)
)

DROP TABLE IF EXISTS Albums;

CREATE TABLE Albums(
    id PRIMARY KEY,
    album_name text,
    year_made int,
    song_amount int,
    total_duration int,
    artist text FOREIGN KEY REFERENCES Artists(artist_name),
    photo url
)

DROP TABLE IF EXISTS Artists;

CREATE TABLE Artists(
    id PRIMARY KEY
    artist_name text
    followers int, 
    about text
    image url
)

DROP TABLE IF EXISTS Playlists;

CREATE TABLE Playlists(
id PRIMARY KEY,
 playlist_name text,
 username text,
 song_amount int,
 playlist_duration int,
 song_name text FOREIGN KEY REFERENCES Tracks(name),
 artist FOREIGN KEY REFERENCES Artists(artist_name),
 album FOREIGN KEY REFERENCES Albums(album_name),
 song_duration FOREIGN KEY REFERENCES Tracks(duration),
 date_added int
)