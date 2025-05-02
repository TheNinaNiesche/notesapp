import React, { useState } from 'react'

const affirmations = [
  "You are enough.",
  "You're doing better than you think.",
  "Progress, not perfection.",
  "You’re allowed to rest.",
  "Code like no one’s watching 👩‍💻✨",
]

function App() {
  const [quote, setQuote] = useState("Click for a vibe check!")

  function getRandomAffirmation() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)]
    setQuote(random)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>{quote}</h2>
      <button onClick={getRandomAffirmation}>Hit me with kindness 💖</button>
    </div>
  )
}

export default App
