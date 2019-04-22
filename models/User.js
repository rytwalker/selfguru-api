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

  static getUserByUsername(username) {
    return db('users')
      .where({ username })
      .first();
  }

  static getUserByEmail(email) {
    return db('users')
      .where({ email })
      .first();
  }

  save() {
    return db('users').insert(this.user, 'email');
  }
}

module.exports = User;
