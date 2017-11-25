module.exports = {
  port: 3000,
  db: {
    uri: 'mongodb://localhost:27017/local',
    options: {
      useMongoClient: true
    }
  }
}