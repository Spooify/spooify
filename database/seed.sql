DELETE FROM Artists;
DELETE FROM Albums;
DELETE FROM Tracks;

--- Artist information ---
INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('0TnOYISbd1XYRBk9myaseg', 'Pitbull', 9986097, 'https://i.scdn.co/image/ab67616100005174fc9d2abc85b6f4bef77f80ea');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('0jnsk9HBra6NMjO2oANoPY', 'Flo Rida', 8849956, 'https://i.scdn.co/image/ab67616100005174655ca8f3196953554b479452');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('6MF9fzBmfXghAz953czmBC', 'Taio Cruz', 2230655, 'https://i.scdn.co/image/ab67616100005174153171480a6f22912253b9f1');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('085pc2PYOi8bGKj0PNjekA', 'will.i.am', 4019587, 'https://i.scdn.co/image/ab67616100005174c9ab8da6f7a3ce02f0b16fd8');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('6S0dmVVn4udvppDhZIWxCr', 'Sean Kingston', 3029796, 'https://i.scdn.co/image/ab6761610000517488736ba90063ff3acb41d177');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('698hF4vcwHwPy8ltmXermq', 'Far East Movement', 1147578, 'https://i.scdn.co/image/ab676161000051746f288ea7bd44c142791dc7cd');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('07YZf4WDAMNwqr4jfgOZ8y', 'Jason Derulo', 11822509, 'https://i.scdn.co/image/ab676161000051742ca27dcc7f92e9576126bb18');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('5ndkK3dpZLKtBklKjxNQwT', 'B.o.B', 2097559, 'https://i.scdn.co/image/ab676161000051743b6f1762e81e53df14990f57');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('3Isy6kedDrgPYoTS1dazA9', 'Sean Paul', 4341073, 'https://i.scdn.co/image/ab6761610000517460c3e9abe7327c0097738f22');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('4VMYDCV2IEDYJArk749S6m', 'Daddy Yankee', 32706068, 'https://i.scdn.co/image/ab6761610000e5ebb00a14e06b6bce10b078d754');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('5lwmRuXgjX8xIwlnauTZIP', 'Romeo Santos', 18690383, 'https://i.scdn.co/image/ab6761610000e5eb6d8b48abede0f9e433aa6e49');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('23zg3TcAtWQy7J6upgbUnj', 'Usher', 10488385, 'https://i.scdn.co/image/ab6761610000e5eb84813d8e6a3154717e618140');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('3fMbdgg4jU18AjLCKBhRSm', 'Michael Jackson', 27188359, 'https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('0EmeFodog0BfCgMzAIvKQp', 'Shakira', 29036229, 'https://i.scdn.co/image/ab67616100005174284894d68fe2f80cad555110');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('2DlGxzQSjYe5N6G9nkYghR', 'Jennifer Lopez', 12349995, 'https://i.scdn.co/image/ab67616100005174ce391c85fb87d67d316d1413');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('7qG3b048QCHVRO5Pv1T5lw', 'Enrique Iglesias', 11181297, 'https://i.scdn.co/image/ab676161000051742335f74de53ef9b9fd7889c8');

INSERT INTO Artists (artist_id, artist_name, followers, image) 
VALUES ('5os0Ltvz8Q8BvXOPOd1frx', 'Inner Circle', 357639, 'https://i.scdn.co/image/ab67616100005174df08adf0b1a2923e688fda60');


--- ALbum Information ---
INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('7I4Vx91kradxSJNwg1ycbq', 'Global Warming: (Deluxe Version)', 2012, 16, 3381969, 
'https://i.scdn.co/image/ab67616d0000b273f575130838bc98c4f2b17312', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('2F7tejLHzTqFq2XLol9ZGy', 'Global Warming: Meltdown (Deluxe Version)', 2012, 17, 3469731, 
'https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('4rG0MhkU6UojACJxkMHIXB', 'Planet Pit (Deluxe Version)', 2011, 16, 3403316, 
'https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('4EUf4YyNjuXypWY6W5wEDm', 'Globalization', 2014, 11, 2332092, 
'https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('4RaAjieYFIZRF8uh6GY43r', 'Pitbull Starring In Rebelution', 2009, 14, 2631090, 
'https://i.scdn.co/image/ab67616d00001e02a511f69870fa68e7ba78c099', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('5PZWGWwRwA0PJCET9BwBAm', 'Dale', 2015, 12, 2651890, 
'https://i.scdn.co/image/ab67616d00001e02a1cc249569898d31407fcf7c', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('76N6imyjQ9h5p2NzakHT32', 'M.I.A.M.I.', 2004, 16, 3743968, 
'https://i.scdn.co/image/ab67616d00001e0200650b5e6be3af579ae18e7c', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('6nCJAxRvXmPkPiZo8Vh5ZG', 'Libertad 548', 2019, 15, 3079260, 
'https://i.scdn.co/image/ab67616d00001e02f0dd8e557b66318ea8e6978d', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('6ZSNnOY2ESMNoVQ5DdvHrj', 'Gotti (Original Motion Picture Soundtrack)', 2018, 19, 3578019, 
'https://i.scdn.co/image/ab67616d00001e02bfb673e097b39939d6f91874', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('4jtKPpBQ5eneMwEI94f5Y0', 'Climate Change', 2017, 12, 2663276, 
'https://i.scdn.co/image/ab67616d00001e02847d47b2d33517f0e8b2b958', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('3rlJCPz7s7bTifG57wjFpt', 'LEGENDADDY', 2022, 19, 2663276, 
'https://i.scdn.co/image/ab67616d00001e0242b84b2b0aa47bc162b29522', '4VMYDCV2IEDYJArk749S6m');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('6a3RDPcFamZvFCi8VeXWkK', 'Fórmula Vol. 1 (Deluxe Edition)', 2012, 20, 2663276, 
'https://i.scdn.co/image/ab67616d00001e021d6d3d544ca5b46453fafbb6', '5lwmRuXgjX8xIwlnauTZIP');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('6A1F3Fkq5dYeYYNkXflcTX', 'Fórmula Vol. 1 (Deluxe Edition)', 2010, 22, 2663276, 
'https://i.scdn.co/image/ab67616d00001e0286b0c9728ad3ed338eaeea79', '23zg3TcAtWQy7J6upgbUnj');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('24TAupSNVWSAHL0R7n71vm', 'Bad 25th Anniversary', 2012, 24, 2663276, 
'https://i.scdn.co/image/ab67616d00001e021bb21d27effb96a1d0fe8d6d', '3fMbdgg4jU18AjLCKBhRSm');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('3gR578qnw47M30LVBTjrlW', 'Sale el Sol', 2010, 16, 2663276, 
'https://i.scdn.co/image/ab67616d00001e024214ddc9e33e76de6a8ee888', '0EmeFodog0BfCgMzAIvKQp');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('3sysiYphqNRQw7VKLCg1yE', 'Love?', 2011, 17, 2663276, 
'https://i.scdn.co/image/ab67616d00001e02d7b2aa3834b82b1cbe899a48', '2DlGxzQSjYe5N6G9nkYghR');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('5JNhQFH8HMKQWP4SITzdoc', 'Euphoria', 2010, 18, 2663276, 
'https://i.scdn.co/image/ab67616d00001e02f6fa4a75fccc308f26c726c6', '7qG3b048QCHVRO5Pv1T5lw');

INSERT INTO Albums (album_id, album_name, year_made, song_amount, total_duration, photo, artist_id) 
VALUES ('0zLd8jpRt4m6FWCu81Fb9n', 'Blazzin'' Fire', 2010, 13, 2663276, 
'https://i.scdn.co/image/ab67616d00001e02cd07cdbe4b041324103c0f08', '5os0Ltvz8Q8BvXOPOd1frx');



--- Track information ---
INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('3cHyrEgdyYRjgJKSOiOtcS', 'Timber (feat. Ke$ha)', 204160, '7I4Vx91kradxSJNwg1ycbq', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('4QNpBfC0zvjKqPJcyqBy9W', 'Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)', 252306, '4rG0MhkU6UojACJxkMHIXB', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('2bJvI42r8EF3wxjOuDav4r', 'Time of Our Lives', 229360, '4EUf4YyNjuXypWY6W5wEDm', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('0Hf4aIJpsN4Os2f0y0VqWl', 'Feel This Moment (feat. Christina Aguilera)', 229506, '2F7tejLHzTqFq2XLol9ZGy', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('0OPyDgTRutrack_idCJ9B4bYSths', 'Hotel Room Service', 237600, '4RaAjieYFIZRF8uh6GY43r', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('62zFEHfAYl5kdHYOivj4BC', 'International Love (feat. Chris Brown)', 227280, '4rG0MhkU6UojACJxkMHIXB', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('4Y7XAxTANhu3lmnLAzhWJW', 'Fireball (feat. John Ryan)', 236200, '4EUf4YyNjuXypWY6W5wEDm', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('13plQdOoWSSXPRUSZc5FuM', 'I Know You Want Me (Calle Ocho)', 237120, '4RaAjieYFIZRF8uh6GY43r', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('3rfhI32Il2hVRKDkuGeeen', 'Hey Baby (Drop It to the Floor) (feat. T-Pain)', 234453, '4rG0MhkU6UojACJxkMHIXB', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id) 
VALUES ('1PCvKFPWnTXAe2oaReVUcr', 'We Are One (Ole Ola) [The Official 2014 FIFA World Cup Song] (feat. Jennifer Lopez & Claudia Leitte)', 222520, '4EUf4YyNjuXypWY6W5wEDm', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('5Pg4qYTcvCUBBq3jBhKq0t', 'HOT', 154493, '3rlJCPz7s7bTifG57wjFpt', '4VMYDCV2IEDYJArk749S6m', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('29N71XR1pCmuGEixRdzELO', 'Aleluya (feat. Pitbull)', 205640, '6a3RDPcFamZvFCi8VeXWkK', '5lwmRuXgjX8xIwlnauTZIP', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('4356Typ82hUiFAynbLYbPn', 'DJ Got Us Fallin In Love (feat. Pitbull)', 220800, '6A1F3Fkq5dYeYYNkXflcTX', '23zg3TcAtWQy7J6upgbUnj', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('7lVHsLX1Tgy0UqQFk8NsCO', 'Bad (feat. Pitbull)', 264733, '24TAupSNVWSAHL0R7n71vm', '3fMbdgg4jU18AjLCKBhRSm', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('2Xh7dyCHCErCv3PmdVEGw4', 'Rabiosa (feat. Pitbull)', 170600, '3gR578qnw47M30LVBTjrlW', '0EmeFodog0BfCgMzAIvKQp', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('3C0nOe05EIt1390bVABLyN', 'On The Floor', 284866, '3sysiYphqNRQw7VKLCg1yE', '2DlGxzQSjYe5N6G9nkYghR', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('7HacCTm33hZYYN8DXpCYuG', 'I Like It', 231373, '5JNhQFH8HMKQWP4SITzdoc', '7qG3b048QCHVRO5Pv1T5lw', '0TnOYISbd1XYRBk9myaseg');

INSERT INTO Tracks (track_id, name, duration, album_id, artist_id, featured_artist) 
VALUES ('33H2AfmGPRg2UiIDsFydsk', 'Bed 2 Big', 231373, '0zLd8jpRt4m6FWCu81Fb9n', '5os0Ltvz8Q8BvXOPOd1frx', '0TnOYISbd1XYRBk9myaseg');

