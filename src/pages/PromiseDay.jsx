import React, { useState } from "react";

export default function PromiseDay({ goBack }) {
  const [revealed, setRevealed] = useState([]);
  const [finalMessage, setFinalMessage] = useState(false);

  const promises = [
  "If you ever choose this, I promise to keep growing — as an individual and with you.",
  "I promise to communicate clearly instead of assuming.",
  "I promise to respect your independence and never compete with it.",
  "I promise to give you space when you need it — without taking it personally.",
  "I promise to stay consistent, not intense.",
  "I promise to handle disagreements calmly, not emotionally.",
  "I promise to support your ambitions without making them about me.",
  "And maybe, if you say yes someday, we’ll travel across India — not to escape life, but to experience it fully."
];


  const handleReveal = (index) => {
    if (!revealed.includes(index)) {
      const updated = [...revealed, index];
      setRevealed(updated);

      if (updated.length === promises.length) {
        setTimeout(() => setFinalMessage(true), 800);
      }
    }
  };

  return (
    <>
      <style>{`
        .promise-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fff6f8, #ffe9f1, #fffafc);
          position: relative;
          overflow: hidden;
          padding: 2rem;
          text-align: center;
        }

        .glow-bg {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,105,135,0.15), transparent 70%);
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }

        @keyframes float {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(40px,-30px); }
        }

        .promise-card {
          max-width: 650px;
          background: rgba(255,255,255,0.96);
          padding: 3rem 2rem;
          border-radius: 32px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.12);
          z-index: 2;
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          font-size: clamp(2.5rem,6vw,3.2rem);
          font-weight: 700;
          background: linear-gradient(135deg,#ff5f87,#c2185b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .subtitle {
          color: #666;
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .promise-orb {
          margin: 1rem auto;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          border: 2px solid #ffd0e0;
          cursor: pointer;
          transition: 0.3s ease;
          width: fit-content;
          background: white;
          max-width: 90%;
        }

        .promise-orb:hover {
          background: linear-gradient(135deg,#ffe6f0,#ffd0e0);
          transform: translateY(-3px);
        }

        .revealed {
          background: linear-gradient(135deg,#ff6b9d,#c2185b);
          color: white;
          border-color: #c2185b;
        }

        .final-message {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 20px;
          background: #fff3f8;
          animation: fadeIn 0.6s ease;
          line-height: 1.7;
        }

        .btn {
          margin-top: 2rem;
          padding: 0.9rem 2rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg,#ff5f87,#c2185b);
          color: white;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div className="promise-container">
        <div className="glow-bg"></div>

        <div className="promise-card">
          <h1 className="title">Promise Day 💍</h1>

          <p className="subtitle">
            This isn’t pressure.  
            This isn’t a claim.  
            It’s just honesty — from me to <strong>My Cutie Pie</strong>.  
            If you ever choose this path with me… these are the promises I’m ready to keep.
          </p>

          {promises.map((p, i) => (
            <div
              key={i}
              className={`promise-orb ${revealed.includes(i) ? "revealed" : ""}`}
              onClick={() => handleReveal(i)}
            >
              {revealed.includes(i) ? p : "Tap gently"}
            </div>
          ))}

          {finalMessage && (
            <div className="final-message">
              I don’t need an answer today.  
              I don’t want to rush you.  
              <br /><br />
              I just wanted you to know —  
              if you ever say yes…  
              If you ever decide this feels right —
              I’ll be here, steady and intentional.
            </div>
          )}

          <button className="btn" onClick={goBack}>
            Go Back Gently 🌷
          </button>
        </div>
      </div>
    </>
  );
}
