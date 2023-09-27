const mongoose = require("mongoose");

// connect
const URI = "";

main()
  .then(() => console.log(`DB is connected`))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main;
