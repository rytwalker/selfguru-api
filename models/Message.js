const db = require('../db/dbConfig');

class Message {
  constructor(message) {
    this.message = message;
  }
  static getMessage(id = null) {
    if (!id) {
      return db('messages');
    }
  }
}

module.exports = Message;
