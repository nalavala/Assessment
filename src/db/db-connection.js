const mongoose = require('mongoose');
const connect = async (dbName) => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, dbName: dbName })  
    } catch(err) {
        throw err;
    }
     
};

const close = async () => {
    return mongoose.disconnect();
}

/**
 * This will be listening to disconnected event of mongoose and get handled if event emitted
 */
mongoose.connection.on('disconnected', (err) => {
    if (err) {
      throw err;
    }
    console.log("Mongo disconnected");
  });
  
  /**
   * This make sure that mongoose gets disconnected on application shutdown.
   */
  process.on('SIGINT', function () {
    close();
  });

  module.exports = { connect, close };