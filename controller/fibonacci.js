const fibonacciService = require('../service/fibonacci')

class FibonacciController {
  async createSequence (req, res) {
    try {
      const id = await fibonacciService.createFibonacci(req.body)
      res.status(201).json(id)
    } catch (error) {
      console.error(error)
    }
  }
}
module.exports = new FibonacciController()
