BEGIN;

DROP TABLE IF EXISTS users, jokes CASCADE;

-- 1 to many
CREATE TABLE users (
  id serial PRIMARY KEY,
  github_id integer NOT NULL UNIQUE,
  username varchar(50) NOT NULL,
  pic varchar(512) NOT NULL,
  name varchar(50) NOT NULL
);

--1 to 1
CREATE TABLE jokes (
  id serial PRIMARY KEY,
  body varchar(500) NOT NULL,
  author_id integer REFERENCES users(id) ON UPDATE CASCADE
);

INSERT INTO users (github_id, username, pic, name)
VALUES
(9408641, 'oliverjam', 'https://avatars2.githubusercontent.com/u/9408641?v=3', 'Oliver'),
(15314681, 'TTICSDNJO', 'https://avatars3.githubusercontent.com/u/15314681?v=3', 'Lucy Sabin');

INSERT INTO jokes (body, author_id) VALUES
('There are only 10 kinds of people in this world: those who know binary and those who dont', 2),
('Whats the object-oriented way to become wealthy? -  Inheritance' , 1),
('“Knock, knock.”
“Who’s there?”
very long pause….
“Java.”', 1),
('Whats a programmers favourite hangout place? - Foo Bar', 2),
('Why did the programmer quit his job? - Because he didnt get arrays',2),
('0 is false and 1 is true, right? - 1', 2),
('What do computers and air conditioners have in common? - Both are useless when you open windows', 1),
('A SQL query goes into a bad, walks up to two tables and asks...Can I join you?', 2);

COMMIT;
