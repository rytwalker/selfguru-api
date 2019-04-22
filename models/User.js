const db = require('../db/dbConfig');

class User {
  constructor(user) {
    this.user = user;
  }
  static getUser(id = null) {
    if (!id) {
      return db('users');
    }
  }
}

module.exports = User;
