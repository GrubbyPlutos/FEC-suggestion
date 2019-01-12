CREATE KEYSPACE IF NOT EXISTS suggestions
  WITH REPLICATION = { 
   'class' : 'NetworkTopologyStrategy', 
   'datacenter1' : 1 
  } ;

USE suggestions;

CREATE TABLE IF NOT EXISTS restaurants (
id int PRIMARY KEY,
accuracy int,
food text,
location text,
name text,
picture text,
price int,
quality int,
review_text text,
reviews int,
stars int,
timeliness int,
username text,
wait_time int);