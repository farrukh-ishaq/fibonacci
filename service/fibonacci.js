const fibonacciDAO = require('../dao/fibonacci')

class FibonacciService {
  createFibonacci (fibonacciData) {
    const { firstName, lastName, email } = fibonacciData

    return fibonacciDAO.createFibonacci(firstName, lastName, email)
  }
}

module.exports = new FibonacciService()

/**
 * createFibonacci (firstName, lastName, email) {
    fibonacciDAO.createFibonacci(firstName, lastName, email)
  }
 * so we could use
 * const { firstName, lastName, email } = fibonacciData
 * if we pass the data as json object, then we decouple the object.
 *
 * we return to respond a promise
 */
