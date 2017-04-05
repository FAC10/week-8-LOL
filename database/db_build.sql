BEGIN;

DROP TABLE IF EXISTS users, jokes CASCADE;

-- 1 to many
CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(50) NOT NULL,
  password varchar(100) NOT NULL
);

--1 to 1
CREATE TABLE jokes (
  id serial PRIMARY KEY,
  body varchar(500) NOT NULL,
  author_id integer REFERENCES users(id) ON UPDATE CASCADE
);


INSERT INTO users (username, password) VALUES
('Maja', 'tralala'),
('Alexis', 'latratra'),
('Oli', 'hunter2'),
('Lucy', 'w!ngard!um lev!osa');

INSERT INTO jokes (body, author_id) VALUES
('There are only 10 kinds of people in this world: those who know binary and those who dont', 2),
('Whats the object-oriented way to become wealthy? -  Inheritance' , 1),
('“Knock, knock.”
“Who’s there?”
very long pause….
“Java.”', 3),
('Whats a programmers favourite hangout place? - Foo Bar', 4),
('Why did the programmer quit his job? - Because he didnt get arrays',2),
('0 is false and 1 is true, right? - 1', 2),
('What do computers and air conditioners have in common? - Both are useless when you open windows', 1),
('A SQL query goes into a bad, walks up to two tables and asks...Can I join you?', 4);

COMMIT;
