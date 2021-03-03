async function greetings (req, res) {
  try {
    res.render('home')
  } catch (error) {
    console.error(error)
  }
}
module.exports = greetings
