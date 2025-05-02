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
  "It’s okay to pause.",
  "Rest is productive.",
  "You’re allowed to take up space.",
  "You’re not late. You’re on your own timeline.",
  "Boundaries are a form of self-respect.",
  "Even slow progress is progress.",
  "Your ideas are valid.",
  "Your voice matters.",
  "You don’t have to do everything alone.",
  "You’re allowed to change your mind.",
  "Doing your best looks different every day.",
  "You’re already growing, even if it’s invisible.",
  "You can start over at any moment.",
  "Needing help is human.",
  "Peace is a priority, not a luxury.",
  "You are worthy of good things.",
  "You don’t have to hustle to deserve rest.",
  "Joy is a revolution.",
  "Softness is strength.",
  "Saying no is self-care.",
  "You don't have to be 'on' all the time.",
  "You're allowed to feel your feelings.",
  "Comparison steals joy. Protect yours.",
  "You are more than your to-do list.",
  "Your presence is powerful.",
  "Healing isn't linear – and that's okay.",
  "You’re doing better than you give yourself credit for.",
  "Small steps count too.",
  "You are not behind. Life isn't a race.",
  "It’s okay to go slow.",
  "Let yourself be proud.",
  "Showing up is brave.",
  "You don’t need permission to rest.",
  "You’re allowed to log off.",
  "You deserve kindness – especially from yourself.",
  "Progress doesn't need to be loud.",
  "Unlearning takes time. Be patient.",
  "You are still whole, even in pieces.",
  "You're not broken – you're rebuilding."
]


function App() {
  const [quote, setQuote] = useState("Click for a vibe check ✨")

  function getRandomAffirmation() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)]
    setQuote(random)
  }

  return (
    <div className="app-container">
    <h1>My affirmations</h1>
      <div className="glass-card">
        <h2 className="quote" key={quote}>{quote}</h2>
        <button className="apple-button" onClick={getRandomAffirmation}>
          Refresh my energy 🍏
        </button>
      </div>
    </div>
  )
}

export default App
