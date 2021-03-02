const db = require('../db/db')

class FibonacciDAO {
  async createFibonacci (firstName, lastName, email) {
    const [id] = await db('fibonacci').insert({
      email,
      first_name: firstName,
      last_name: lastName
    }).returning('id')
    return id
  }
}

module.exports = new FibonacciDAO()

/**
 * this class is a database abstraction layer, it uses knex
 * syntax to connect database.
 *
 * db is a promise so we return id where id can many number of
 * affected rows. rown[n]
 */
