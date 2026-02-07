import React, { useEffect, useState } from "react";

export default function RoseDay() {
  // States
  const [started, setStarted] = useState(false);
  const [pickedRoses, setPickedRoses] = useState([]);
  const [roseMessage, setRoseMessage] = useState("");
  const [coinResult, setCoinResult] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState("");
  const [openedGift, setOpenedGift] = useState(null);
  const [randomNote, setRandomNote] = useState("");
  const [moodIndex, setMoodIndex] = useState(-1);
  const [showLoveScene, setShowLoveScene] = useState(false);
  const [showCalmScene, setShowCalmScene] = useState(false);
  const [showThoughtfulScene, setShowThoughtfulScene] = useState(false);
  const [showPlayfulScene, setShowPlayfulScene] = useState(false);
  const [showPeacefulScene, setShowPeacefulScene] = useState(false);
  const [showFocusedScene, setShowFocusedScene] = useState(false);
  
  // Data - Subtle and gentle messages
  const roseMessages = [
    "Sometimes a small gesture is all it takes.",
    "Thought you might like this one.",
    "Here's something just for you.",
    "A little something to brighten your day.",
    "Hope this brings a smile.",
    "Just wanted to share this with you.",
    "Sending positive vibes your way.",
    "You deserve something nice today.",
  ];

  const specialRoseMessage = "You know, some people just make everything feel a little better. 💕";

  const coinOutcomes = {
    Smile: "A soft smile would be nice right about now 🙂",
    Laugh: "Your laugh is probably lovely 😊",
    Think: "Wonder what you're thinking... 🌿",
  };

  const quizQuestions = [
    {
      question: "What makes a day better?",
      options: ["Loud excitement", "Quiet comfort", "Constant activity", "Nothing special"],
      answer: 1,
      right: "I'd agree with that.",
      wrong: "Hmm, I see it differently, but that's okay.",
    },
    {
      question: "Teaching says a lot about someone because it shows...",
      options: ["Authority", "Knowledge", "Patience and care", "Discipline"],
      answer: 2,
      right: "Exactly what I was thinking.",
      wrong: "Fair point, though I lean another way.",
    },
    {
      question: "What's most admirable in a person?",
      options: ["Being the loudest", "Being flashy", "Being genuine", "Being perfect"],
      answer: 2,
      right: "Couldn't agree more.",
      wrong: "I get it, but genuine wins for me.",
    },
    {
      question: "Small gestures are often...",
      options: ["Meaningless", "Forgettable", "More meaningful than grand ones", "Just okay"],
      answer: 2,
      right: "That's what I think too.",
      wrong: "I'd say they matter more than we think.",
    },
    {
      question: "A good connection feels...",
      options: ["Forced", "Complicated", "Natural and easy", "Rare"],
      answer: 2,
      right: "Yeah, natural is best.",
      wrong: "Maybe, but ease matters.",
    },
  ];

  const giftMessages = [
    "Not this one, but nice try! 😊",
    "Close, but not quite. Keep looking! 🎭",
    "This one's keeping its secret. 💫",
  ];
  const winningGiftMessage = "Sometimes you just notice someone without trying to. That's kind of how this feels. ✨";

  const randomNotes = [
    "Just wanted to say... you seem really nice. 💕",
    "I appreciate the little things about you, Drishti. 🌸",
    "There's something calming about your presence. 🌿",
    "You don't have to do much to stand out. ✨",
    "Hope you're having a good day. Thought of you. 💭",
  ];

  // Effects
  useEffect(() => {
    if (quizIndex >= quizQuestions.length) {
      setQuizFinished(true);
    }
  }, [quizIndex]);

  // Handlers
  const handlePickRose = (index) => {
    if (pickedRoses.includes(index)) return;
    setPickedRoses([...pickedRoses, index]);
    setRoseMessage(
      index === 4
        ? specialRoseMessage
        : roseMessages[Math.floor(Math.random() * roseMessages.length)]
    );
    setTimeout(() => setRoseMessage(""), 4000);
  };

  const handleFlipCoin = () => {
    if (flipping) return;
    setFlipping(true);
    setCoinResult(null);
    setTimeout(() => {
      const keys = Object.keys(coinOutcomes);
      setCoinResult(keys[Math.floor(Math.random() * keys.length)]);
      setFlipping(false);
    }, 1200);
  };

  const handleQuizAnswer = (i) => {
    const q = quizQuestions[quizIndex];
    if (i === q.answer) {
      setQuizScore((s) => s + 1);
      setQuizFeedback(q.right);
    } else {
      setQuizFeedback(q.wrong);
    }
    setTimeout(() => {
      setQuizFeedback("");
      setQuizIndex((x) => x + 1);
    }, 4500);
  };

  const handleRandomNote = () => {
    setRandomNote(randomNotes[Math.floor(Math.random() * randomNotes.length)]);
    setTimeout(() => setRandomNote(""), 4500);
  };

  // Toggle love scene
  const toggleLoveScene = () => {
    setShowLoveScene(!showLoveScene);
  };

  // Scene triggers based on mood
  const handleMoodSelection = (index) => {
    setMoodIndex(index);
    setShowCalmScene(false);
    setShowThoughtfulScene(false);
    setShowPlayfulScene(false);
    setShowPeacefulScene(false);
    setShowFocusedScene(false);
    
    switch (index) {
      case 0: setShowCalmScene(true); break;
      case 1: setShowThoughtfulScene(true); break;
      case 2: setShowPlayfulScene(true); break;
      case 3: setShowFocusedScene(true); break;
      case 4: setShowPeacefulScene(true); break;
      default: break;
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .rose-day-container {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #fff5f7 0%, #ffe6ee 50%, #fff0f5 100%);
          padding: 0;
          overflow-x: hidden;
        }

        .hero-section {
          background: linear-gradient(135deg, #ff6b9d 0%, #c2185b 100%);
          color: white;
          padding: 4rem 1rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          width: 100%;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 2rem 1rem;
        }

        .section-card {
          background: white;
          border-radius: 20px;
          padding: 2rem 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
          width: 100%;
        }

        .section-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.12);
        }

        .section-title {
          color: #c2185b;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .rose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          max-width: 100%;
        }

        .rose-item {
          font-size: 3.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1rem;
          border-radius: 15px;
          background: linear-gradient(135deg, #fff 0%, #ffe6f0 100%);
          border: 2px solid transparent;
          aspect-ratio: 1;
        }

        .rose-item:hover:not(.picked) {
          transform: scale(1.15) rotate(10deg);
          background: linear-gradient(135deg, #ffe6f0 0%, #ffd0e0 100%);
          border-color: #ff6b9d;
          box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        }

        .rose-item.picked {
          opacity: 0.4;
          cursor: not-allowed;
          filter: grayscale(0.5);
        }

        .message-box {
          background: linear-gradient(135deg, #ffe6f0 0%, #fff0f5 100%);
          border-left: 4px solid #ff6b9d;
          padding: 1.5rem;
          border-radius: 15px;
          margin-top: 1.5rem;
          font-size: 1.1rem;
          color: #555;
          animation: slideIn 0.5s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          max-width: 100%;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .coin-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .coin {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
          transition: all 0.3s ease;
          border: 4px solid #ffed4e;
          color: #c2185b;
        }

        .coin:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6);
        }

        .coin.flipping {
          animation: flip 1.2s ease-in-out;
        }

        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(1800deg) scale(1.2); }
          100% { transform: rotateY(1800deg); }
        }

        .quiz-container {
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        .quiz-option {
          background: white;
          border: 2px solid #ffe6f0;
          color: #555;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          font-size: 1rem;
          width: 100%;
          margin-bottom: 0.75rem;
          cursor: pointer;
        }

        .quiz-option:hover {
          background: linear-gradient(135deg, #ffe6f0 0%, #ffd0e0 100%);
          border-color: #ff6b9d;
          transform: translateX(10px);
          box-shadow: 0 3px 15px rgba(255, 107, 157, 0.2);
        }

        .quiz-feedback {
          background: linear-gradient(135deg, #e1f5e1 0%, #c8e6c9 100%);
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1rem;
          text-align: center;
          font-style: italic;
          color: #2e7d32;
          animation: slideIn 0.5s ease;
        }

        .gift-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .gift-box {
          font-size: 5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 1rem;
          border-radius: 15px;
          background: linear-gradient(135deg, #fff 0%, #ffe6f0 100%);
          text-align: center;
        }

        .gift-box:hover {
          transform: scale(1.15) rotate(-10deg);
          filter: drop-shadow(0 5px 15px rgba(255, 107, 157, 0.4));
        }

        .mood-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
        }

        .mood-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          border: 2px solid #ffe6f0;
          background: white;
          color: #555;
          transition: all 0.3s ease;
          font-size: clamp(0.9rem, 2vw, 1rem);
          white-space: nowrap;
          cursor: pointer;
        }

        .mood-btn:hover {
          background: linear-gradient(135deg, #ffe6f0 0%, #ffd0e0 100%);
          border-color: #ff6b9d;
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        }

        .mood-btn.active {
          background: linear-gradient(135deg, #ff6b9d 0%, #c2185b 100%);
          color: white;
          border-color: #c2185b;
          box-shadow: 0 4px 15px rgba(194, 24, 91, 0.4);
        }

        .mood-scene {
          min-height: 250px;
          background: linear-gradient(135deg, #fff 0%, #ffe6f0 100%);
          border-radius: 15px;
          padding: 2rem 1rem;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.8s ease;
          width: 100%;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .emoji-display {
          font-size: clamp(3rem, 8vw, 5rem);
          margin: 1rem 0;
        }

        .love-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
        }

        .heart-animation {
          animation: heartPulse 2s infinite;
          pointer-events: auto;
          cursor: pointer;
        }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .stars-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .star {
          animation: starSpin 3s linear infinite;
        }

        @keyframes starSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #ff6b9d 0%, #c2185b 100%);
          border: none;
          color: white;
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(194, 24, 91, 0.3);
          cursor: pointer;
        }

        .btn-primary-custom:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(194, 24, 91, 0.5);
          background: linear-gradient(135deg, #ff8ab3 0%, #d81b60 100%);
        }

        .footer {
          background: linear-gradient(135deg, #c2185b 0%, #880e4f 100%);
          color: white;
          padding: 2rem 1rem;
          text-align: center;
          margin-top: 3rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .section-card {
            padding: 1.5rem 1rem;
          }
          
          .rose-grid {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          }
          
          .rose-item {
            font-size: 2.5rem;
            padding: 1rem 0.5rem;
          }
          
          .coin {
            width: 100px;
            height: 100px;
            font-size: 2rem;
          }
          
          .gift-box {
            font-size: 3.5rem;
          }

          .gift-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .rose-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="rose-day-container">
        {!started ? (
          <div className="hero-section">
            <div className="container">
              <h1 className="hero-title">🌹 Happy Rose Day 🌹</h1>
              <h2 className="hero-subtitle" style={{fontSize: 'clamp(1.2rem, 3vw, 1.8rem)'}}>for my Cutie Pie</h2>
              <p className="hero-subtitle">Just a small gesture to let you know you're appreciated 💖</p>
              <button className="btn-primary-custom" onClick={() => setStarted(true)}>
                Click Here Cutie 
              </button>
            </div>
          </div>
        ) : (
          <div className="content-wrapper">
            {/* 1. Pick Roses */}
            <div className="section-card">
              <h2 className="section-title">🌹 Pick a Rose</h2>
              <div className="rose-grid">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`rose-item ${pickedRoses.includes(i) ? 'picked' : ''}`}
                    onClick={() => handlePickRose(i)}
                  >
                    🌹
                  </div>
                ))}
              </div>
              {roseMessage && (
                <div className="message-box">
                  {roseMessage}
                </div>
              )}
            </div>

            {/* 2. Flip the Coin */}
            <div className="section-card">
              <h2 className="section-title">🎯 Flip the Coin</h2>
              <div className="coin-container">
                <div
                  className={`coin ${flipping ? 'flipping' : ''}`}
                  onClick={handleFlipCoin}
                >
                  {coinResult ? coinResult : '?'}
                </div>
                {coinResult && (
                  <div className="message-box" style={{marginTop: 0, maxWidth: '500px'}}>
                    {coinOutcomes[coinResult]}
                  </div>
                )}
              </div>
            </div>

            {/* 3. Quiz */}
            <div className="section-card">
              <h2 className="section-title">🤭 A Little Quiz</h2>
              {!quizFinished ? (
                <div className="quiz-container">
                  <h4 style={{marginBottom: '1.5rem', color: '#555', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', textAlign: 'center'}}>
                    {quizQuestions[quizIndex].question}
                  </h4>
                  <div>
                    {quizQuestions[quizIndex].options.map((opt, i) => (
                      <button
                        key={i}
                        className="quiz-option"
                        onClick={() => handleQuizAnswer(i)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {quizFeedback && (
                    <div className="quiz-feedback">{quizFeedback}</div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <div className="emoji-display">🌟</div>
                  <h4 style={{color: '#c2185b'}}>We think alike on {quizScore} out of {quizQuestions.length}</h4>
                  <p style={{color: '#555', fontSize: '1rem', marginTop: '1rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
                    {quizScore >= 4 ? "That's pretty interesting, actually." : "Different perspectives, but that's okay."}
                  </p>
                </div>
              )}
            </div>

            {/* 4. Mystery Gift */}
            <div className="section-card">
              <h2 className="section-title">🎁 Pick a Box</h2>
              <div className="gift-grid">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} onClick={() => setOpenedGift(i)}>
                    <div className="gift-box">🎁</div>
                  </div>
                ))}
              </div>
              {openedGift !== null && (
                <div className="message-box">
                  {openedGift === 3 ? winningGiftMessage : giftMessages[openedGift]}
                </div>
              )}
            </div>

            {/* 5. Generate Cute Notes */}
            <div className="section-card">
              <h2 className="section-title">💭 A Random Thought</h2>
              <div className="text-center">
                <button className="btn-primary-custom" onClick={handleRandomNote}>
                  Click Here 💌
                </button>
              </div>
              {randomNote && (
                <div className="message-box" style={{maxWidth: '600px', margin: '1.5rem auto 0'}}>
                  {randomNote}
                </div>
              )}
            </div>

            {/* 6. Mood Selection */}
            <div className="section-card">
              <h2 className="section-title">✨ How Are You Feeling?</h2>
              <div className="mood-buttons">
                {['Calm 🌿', 'Thoughtful ✨', 'Playful 🌸', 'Focused 📚', 'Peaceful 🏔️'].map((m, i) => (
                  <button
                    key={i}
                    className={`mood-btn ${i === moodIndex ? 'active' : ''}`}
                    onClick={() => handleMoodSelection(i)}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Mood Scenes */}
              {moodIndex >= 0 && (
                <div className="mood-scene">
                  {showCalmScene && (
                    <>
                      <h3 style={{color: '#c2185b', marginBottom: '1rem', textAlign: 'center'}}>🌸 Calm & Peaceful</h3>
                      <div className="emoji-display">🌺 🌸 🌼</div>
                      <p style={{color: '#555', textAlign: 'center', maxWidth: '500px'}}>
                        There's something really nice about calm energy. It's refreshing.
                      </p>
                    </>
                  )}
                  {showThoughtfulScene && (
                    <>
                      <h3 style={{color: '#c2185b', marginBottom: '1rem', textAlign: 'center'}}>✨ Thoughtful & Reflective</h3>
                      <div className="stars-container">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <span key={i} className="star" style={{fontSize: '1.5rem'}}>⭐</span>
                        ))}
                      </div>
                      <p style={{color: '#555', textAlign: 'center', maxWidth: '500px', marginTop: '1rem'}}>
                        Thoughtful people notice things others miss. That's a good quality.
                      </p>
                    </>
                  )}
                  {showPlayfulScene && (
                    <>
                      <h3 style={{color: '#c2185b', marginBottom: '1rem', textAlign: 'center'}}>🌈 Playful & Bright</h3>
                      <div className="emoji-display">🌈 ☀️ 🎉</div>
                      <p style={{color: '#555', textAlign: 'center', maxWidth: '500px'}}>
                        A playful spirit makes ordinary moments memorable.
                      </p>
                    </>
                  )}
                  {showFocusedScene && (
                    <>
                      <h3 style={{color: '#c2185b', marginBottom: '1rem', textAlign: 'center'}}>📚 Focused & Determined</h3>
                      <div className="emoji-display">📖 ✏️ 💡</div>
                      <p style={{color: '#555', textAlign: 'center', maxWidth: '500px'}}>
                        Your dedication to teaching shows. That's admirable.
                      </p>
                    </>
                  )}
                  {showPeacefulScene && (
                    <>
                      <h3 style={{color: '#c2185b', marginBottom: '1rem', textAlign: 'center'}}>🏔️ Peaceful & Grounded</h3>
                      <div className="emoji-display">🌿 🌊 🌙</div>
                      <p style={{color: '#555', textAlign: 'center', maxWidth: '500px'}}>
                        Like those mountains you like - steady and calming.
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* 7. Spread Love */}
            <div className="section-card text-center">
              <h2 className="section-title">💖 One More Thing</h2>
              <button 
                className="btn-primary-custom" 
                onClick={toggleLoveScene}
              >
                {showLoveScene ? 'Hide ❤️' : 'Click Here ✨'}
              </button>
            </div>

            {/* Final Message */}
            <div className="section-card text-center">
              <h2 style={{color: '#c2185b', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
                🌹 Happy Rose Day 🌹
              </h2>
              <p style={{maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#555', lineHeight: '1.8', padding: '0 1rem'}}>
                This is just a simple way of saying you've caught my attention, Drishti. No pressure, no expectations - 
                just wanted you to know that I think you're someone worth getting to know better. Hope this brought a smile. 🌸
              </p>
            </div>
          </div>
        )}

        {/* Love Scene Overlay - Toggle on/off */}
        {showLoveScene && (
          <div className="love-overlay" onClick={toggleLoveScene}>
            <div className="heart-animation">
              <svg width="150" height="150" viewBox="0 0 24 24" fill="#ff6b9d">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <p style={{margin: 0, fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>
            Made with care 💖 by vishwajit vm
          </p>
          <p style={{margin: '0.5rem 0 0', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)', opacity: 0.8}}>
            Because some people deserve a little extra thoughtfulness 🌹
          </p>
        </div>
      </div>
    </>
  );
}
