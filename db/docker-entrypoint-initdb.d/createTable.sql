CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  brand VARCHAR(50) NOT NULL,
  department VARCHAR(20) NOT NULL,
  price NUMERIC(5, 2) NOT NULL,
  "imageUrl" VARCHAR(2100) NOT NULL,
  "productUrl" VARCHAR(2100) NOT NULL
);


COPY items (title, brand, department, price, "imageUrl", "productUrl")
FROM '/example_data.csv'
DELIMITER ', '
CSV HEADER;

CREATE INDEX ON items (department);
CREATE INDEX ON items (brand);
CREATE INDEX ON items (price);