DELETE FROM Artists;
DELETE FROM Albums;
DELETE FROM Tracks;

INSERT INTO Artists (id, artist_name, followers, image) VALUES ('0TnOYISbd1XYRBk9myaseg', 'Pit Bull', 9986097, 'https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('7I4Vx91kradxSJNwg1ycbq', 'Global Warming: Meltdown (Deluxe Version)', 2012, 16, 204160, 
'https://i.scdn.co/image/ab67616d0000b273f575130838bc98c4f2b17312', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('4rG0MhkU6UojACJxkMHIXB', 'Planet Pit (Deluxe Version)', 2011, 16, 252306, 
'https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('0TnOYISbd1XYRBk9myaseg', 'Globalization', 2014, 11, 184360, 
'https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) VALUES ('3cHyrEgdyYRjgJKSOiOtcS', 'Timber (feat. Ke$ha)', 204160, '7I4Vx91kradxSJNwg1ycbq', '0TnOYISbd1XYRBk9myaseg');

