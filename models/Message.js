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

  static getMessagesByUserId(id) {
    return db('messages').where({ user_id: id });
  }
}

module.exports = Message;
