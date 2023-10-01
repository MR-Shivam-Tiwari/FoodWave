const mongoose = require("mongoose");

const uri =
  "mongodb+srv://shivamt2023:ft123shivam123@cluster0.kqsexaf.mongodb.net/test?retryWrites=true&w=majority";

const MongoDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', async () => {
      console.log("Connected to MongoDB Atlas");

      const fetchedData = mongoose.connection.db.collection("dishes");
      const data = await fetchedData.find({}).toArray();

      if (data.length === 0) {
        console.log("No data found.");
      } else {
        // console.log("Fetched data:", data);
      }
    });
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }
};

module.exports = MongoDB;

// Call MongoDB() to execute the code
MongoDB();
