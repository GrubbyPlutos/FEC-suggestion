CREATE DATABASE suggestions;

\c suggestions;

CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    accuracy INT NOT NULL,
    food VARCHAR(200) NOT NULL,
    food_type VARCHAR(200) NOT NULL,
    location INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    picture VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    quality INT NOT NULL,
    review_text VARCHAR(200) NOT NULL,
    reviews INT NOT NULL,
    stars INT NOT NULL,
    timeliness INT NOT NULL,
    username VARCHAR(100) NOT NULL,
    wait_time INT NOT NULL
);

-- COPY restaurants FROM '/Users/jessicahodson/hack-reactor/SDC/SDC-suggestion/suggestions1.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX location_foodtype on restaurants (location, food_type);
