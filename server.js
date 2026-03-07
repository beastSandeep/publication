const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 Shuting Down....");

  process.exit(1);
});

// console.log(process.env);

const app = require("./app");

function dataBaseString(enveironment) {
  let DBSTRING;
  if (enveironment === "development") DBSTRING = process.env.LOCAL_STRING;
  if (enveironment === "production")
    DBSTRING = process.env.DATABASE_STRING.replace(
      "<password>",
      process.env.DATABASE_PASSWORD,
    );
  return DBSTRING;
}

mongoose
  .connect(dataBaseString(process.env.NODE_ENV), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  });

const server = app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(
    `server is listening on ${process.env.PORT}.....\nhttp://127.0.0.1:${process.env.PORT}`,
  );
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 Shuting Down....");
  server.close(() => {
    process.exit(1);
  });
});
