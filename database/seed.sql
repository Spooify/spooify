DELETE FROM Artists;
DELETE FROM Albums;
DELETE FROM Tracks;

INSERT INTO Artists (id, artist_name, followers, image) 
VALUES ('0TnOYISbd1XYRBk9myaseg', 'Pit Bull', 9986097, 'https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('7I4Vx91kradxSJNwg1ycbq', 'Global Warming: (Deluxe Version)', 2012, 16, 3381969, 
'https://i.scdn.co/image/ab67616d0000b273f575130838bc98c4f2b17312', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('2F7tejLHzTqFq2XLol9ZGy', 'Global Warming: Meltdown (Deluxe Version)', 2012, 17, 3469731, 
'https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('4rG0MhkU6UojACJxkMHIXB', 'Planet Pit (Deluxe Version)', 2011, 16, 3403316, 
'https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('4EUf4YyNjuXypWY6W5wEDm', 'Globalization', 2014, 11, 2332092, 
'https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('4RaAjieYFIZRF8uh6GY43r', 'Pitbull Starring In Rebelution', 2009, 14, 2631090, 
'https://i.scdn.co/image/ab67616d00001e02a511f69870fa68e7ba78c099', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('5PZWGWwRwA0PJCET9BwBAm', 'Dale', 2015, 12, 2651890, 
'https://i.scdn.co/image/ab67616d00001e02a1cc249569898d31407fcf7c', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('76N6imyjQ9h5p2NzakHT32', 'M.I.A.M.I.', 2004, 16, 3743968, 
'https://i.scdn.co/image/ab67616d00001e0200650b5e6be3af579ae18e7c', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('6nCJAxRvXmPkPiZo8Vh5ZG', 'Libertad 548', 2019, 15, 3079260, 
'https://i.scdn.co/image/ab67616d00001e02f0dd8e557b66318ea8e6978d', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('6ZSNnOY2ESMNoVQ5DdvHrj', 'Gotti (Original Motion Picture Soundtrack)', 2018, 19, 3578019, 
'https://i.scdn.co/image/ab67616d00001e02bfb673e097b39939d6f91874', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (id, album_name, year_made, song_amount, total_duration, photo, artist) 
VALUES ('4jtKPpBQ5eneMwEI94f5Y0', 'Climate Change', 2017, 12, 2663276, 
'https://i.scdn.co/image/ab67616d00001e02847d47b2d33517f0e8b2b958', '0TnOYISbd1XYRBk9myaseg');


INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('3cHyrEgdyYRjgJKSOiOtcS', 'Timber (feat. Ke$ha)', 204160, '7I4Vx91kradxSJNwg1ycbq', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('4QNpBfC0zvjKqPJcyqBy9W', 'Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)', 252306, '4rG0MhkU6UojACJxkMHIXB', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('2bJvI42r8EF3wxjOuDav4r', 'Time of Our Lives', 229360, '4EUf4YyNjuXypWY6W5wEDm', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('0Hf4aIJpsN4Os2f0y0VqWl', 'Feel This Moment (feat. Christina Aguilera)', 229506, '2F7tejLHzTqFq2XLol9ZGy', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('0OPyDgTRuIdCJ9B4bYSths', 'Hotel Room Service', 237600, '4RaAjieYFIZRF8uh6GY43r', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('62zFEHfAYl5kdHYOivj4BC', 'International Love (feat. Chris Brown)', 227280, '4rG0MhkU6UojACJxkMHIXB', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('4Y7XAxTANhu3lmnLAzhWJW', 'Fireball (feat. John Ryan)', 236200, '4EUf4YyNjuXypWY6W5wEDm', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('13plQdOoWSSXPRUSZc5FuM', 'I Know You Want Me (Calle Ocho)', 237120, '4RaAjieYFIZRF8uh6GY43r', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('3rfhI32Il2hVRKDkuGeeen', 'Hey Baby (Drop It to the Floor) (feat. T-Pain)', 234453, '4rG0MhkU6UojACJxkMHIXB', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (id, name, duration, album, artist) 
VALUES ('1PCvKFPWnTXAe2oaReVUcr', 'We Are One (Ole Ola) [The Official 2014 FIFA World Cup Song] (feat. Jennifer Lopez & Claudia Leitte)', 222520, '4EUf4YyNjuXypWY6W5wEDm', '0TnOYISbd1XYRBk9myaseg');
