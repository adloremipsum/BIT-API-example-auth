import User from "../models/User.js";

async function userSeeder() {
  await User.create({
    email: "leia@starwars.com",
    password: "123123123",
  });
  await User.create({
    email: "luke@starwars.com",
    password: "123123123",
  });
  await User.create({
    email: "han@starwars.com",
    password: "123123123",
  });
  console.log("[Seeder] Users created");
  process.exit();
}

userSeeder();
