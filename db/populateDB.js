#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 )
);

INSERT INTO messages (username, text) 
VALUES
  ('Bryan', 'farting'),
  ('Odin', 'pooping'),
  ('Damon', 'peeing');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://susanchen:w1thj0y!@localhost:5432/testing",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
