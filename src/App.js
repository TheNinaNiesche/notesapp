import React, { useState } from 'react'
import './App.css'

const affirmations = [
  "You are enough.",
  "You're doing better than you think.",
  "Progress, not perfection.",
  "You’re allowed to rest.",
  "Code like no one’s watching 👩‍💻✨",
  "Mistakes mean you're trying.",
  "Your energy is sacred – spend it wisely.",
  "You bring something unique to the table.",
  "You don't have to earn your worth.",
  "Take breaks. Often. Guilt-free.",
  "Your future self is already proud of you.",
  "You are not your productivity.",
  "It’s okay to pause."
]

function App() {
  const [quote, setQuote] = useState("Click for a vibe check ✨")

  function getRandomAffirmation() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)]
    setQuote(random)
  }

  return (
    <div className="app-container">
      <div className="glass-card">
        <h2 className="quote">{quote}</h2>
        <button className="apple-button" onClick={getRandomAffirmation}>
          Refresh my energy 🍏
        </button>
      </div>
    </div>
  )
}

export default App
