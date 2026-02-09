import React, { useEffect, useState } from "react";

export default function ChocolateDay({ goBack }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <>
      <style>{`
        .choco-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #3e2723 0%, #4e342e 50%, #2e1c16 100%);
          padding: 2rem;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        /* Flowing chocolate waves */
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 200px;
          background: radial-gradient(circle at 50% 50%, #5d4037 40%, #3e2723 70%);
          opacity: 0.4;
          border-radius: 45%;
          animation: waveMove 12s linear infinite;
        }

        .wave:nth-child(1) {
          animation-duration: 18s;
          opacity: 0.35;
        }

        .wave:nth-child(2) {
          animation-duration: 25s;
          opacity: 0.25;
          bottom: -20px;
        }

        @keyframes waveMove {
          from { transform: translateX(0) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }

        /* Chocolate drip */
        .drip {
          position: absolute;
          top: 0;
          width: 60px;
          height: 120px;
          background: #5d4037;
          border-radius: 30px;
          animation: dripFall 6s infinite ease-in-out;
          opacity: 0.5;
        }

        .drip:nth-child(3) { left: 20%; animation-delay: 0s; }
        .drip:nth-child(4) { left: 50%; animation-delay: 2s; }
        .drip:nth-child(5) { left: 75%; animation-delay: 4s; }

        @keyframes dripFall {
          0% { transform: translateY(-150px); opacity: 0; }
          40% { opacity: 0.6; }
          100% { transform: translateY(110vh); opacity: 0; }
        }

        .choco-card {
          max-width: 540px;
          width: 100%;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          border-radius: 30px;
          padding: 3rem 2rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          opacity: ${visible ? 1 : 0};
          transform: ${visible ? "translateY(0)" : "translateY(40px)"};
          transition: all 1s ease;
          position: relative;
          z-index: 2;
        }

        .choco-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .choco-message {
          font-size: 1.15rem;
          line-height: 1.9;
          margin-top: 1.5rem;
          opacity: 0.95;
        }

        .highlight {
          color: #ffccbc;
          font-weight: 600;
        }

        .back-btn {
          margin-top: 2.5rem;
          padding: 0.9rem 2rem;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #d7ccc8, #bcaaa4);
          color: #3e2723;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .back-btn:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div className="choco-container">

        <div className="wave"></div>
        <div className="wave"></div>

        <div className="drip"></div>
        <div className="drip"></div>
        <div className="drip"></div>

        <div className="choco-card">
          <h1 className="choco-title">Happy Chocolate Day 🍫</h1>

          <div className="choco-message">
            <span className="highlight">Drrishti</span> 🤎  
            <br /><br />
            My cutie pie…  
            chocolate is sweet, soft, and comforting —  
            but somehow, being around you feels even warmer.
            <br /><br />
            You have this quiet way of making ordinary moments  
            feel lighter… happier… softer.
            <br /><br />
            So today isn’t about chocolates.  
            It’s about appreciating the sweetness  
            you bring without even trying.
            <br /><br />
            And honestly… that’s my favorite part.
          </div>

          <button className="back-btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
