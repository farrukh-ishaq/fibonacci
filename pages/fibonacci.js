async function fibonacci (req, res) {
  try {
    const seq = await fibonacciSequence()
    res.render('fibonacci', { seq: seq })
  } catch (error) {
    res.render('error', { error })
  }
}
async function fibonacciSequence () {
  try {
    let no1, no2, seq
    const result = []
    no1 = 0
    no2 = 1
    seq = no2
    for (let i = 1; i < 8; i++) {
      seq = no1 + no2
      no1 = no2
      no2 = seq
      result.push(seq, ',')
    }
    return result
  } catch (error) {
    return 'unable to generate a sequence'
  }
}

module.exports = fibonacci
