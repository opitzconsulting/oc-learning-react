const express = require('express')
const { JsonDB, Config } = require('node-json-db')
const path = require('path')

// Datenbank initialisieren
const dbFile = path.join(__dirname, 'db', 'quiz-db')
const db = new JsonDB(new Config(dbFile, true, true, '/'))

const app = express()
app.use(express.json())

// Alle Quizfragen abrufen
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await db.getData('/questions')
    res.json(questions)
  } catch (e) {
    res.json([])
  }
})

//Spieler wählt Quizfrage und überprüft die Antwort
app.post('/api/questions/:id/answer', async (req, res) => {
  const questionId = parseInt(req.params.id)
  const userAnswer = req.body.answer // erwartet: Index der Antwort (z.B. 0, 1, 2, ...)
  try {
    const questions = await db.getData('/questions')
    const question = questions.find(q => q.id === questionId)
    if (!question) {
      return res.status(404).json({ error: 'Frage nicht gefunden' })
    }
    if (userAnswer === question.correct) {
      return res.json({ correct: true })
    } else {
      return res.json({ correct: false, correctAnswer: question.correct })
    }
  } catch (e) {
    res.status(500).json({ error: 'Serverfehler' })
  }
})

// Neue Session anlegen
app.post('/api/games', async (req, res) => {
  const { playerName } = req.body
  const gameId = Math.random().toString(36).substr(2, 9)

  // Hole alle Fragen aus der DB
  const allQuestions = await db.getData('/questions')
  // IDs aller Fragen extrahieren
  const allIds = allQuestions.map(q => q.id)
  // Mische die IDs zufällig
  const shuffled = allIds.sort(() => 0.5 - Math.random())
  // Wähle die ersten 3 IDs aus
  const questions = shuffled.slice(0, 3)

  db.push(`/games[]`, {
    id: gameId,
    players: [{ name: playerName, score: 0, answers: [] }],
    questions,
    status: 'waiting'
  })
  res.json({ gameId })
})

// Zweiter Spieler tritt bei
app.post('/api/games/:gameId/join', (req, res) => {
  const { playerName } = req.body
  const game = db.getData(`/games`).find(g => g.id === req.params.gameId)
  if (!game || game.players.length >= 2) return res.status(400).json({ error: 'Nicht möglich' })
  game.players.push({ name: playerName, score: 0, answers: [] })
  game.status = 'running'
  db.push(`/games`, db.getData('/games'))
  res.json({ success: true })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Opitz-Quiz Backend läuft auf Port ${PORT}`)
})