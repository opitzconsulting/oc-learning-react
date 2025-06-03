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

// Neue Frage hinzufügen
app.post('/api/questions', (req, res) => {
  try {
    let questions = []
    try {
      questions = db.getData('/questions')
    } catch {
      // Wenn noch keine Fragen existieren
      questions = []
    }
    questions.push(req.body)
    db.push('/questions', questions)
    res.status(201).json({ success: true })
  } catch (e) {
    res.status(500).json({ success: false, error: e.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Opitz-Quiz Backend läuft auf Port ${PORT}`)
})