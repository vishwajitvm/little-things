import React from 'react';

export default function Home({ navigate }) {
  return (
    <>
      <style>{`
        .home-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, #fff5f7 0%, #ffe6ee 50%, #fff0f5 100%);
          position: relative;
          overflow: hidden;
        }

        /* 🔧 MOBILE FIX */
        @media (max-width: 768px) {
          .home-container {
            align-items: flex-start;
            justify-content: flex-start;
            overflow-y: auto;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }

        .home-container::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .home-container::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(194, 24, 91, 0.08) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        .content-card {
          max-width: 450px;
          width: 100%;
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 3rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 1;
          animation: slideUp 0.8s ease-out;
          margin-bottom: 3rem; /* allows scroll breathing room */
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title-section {
          margin-bottom: 2rem;
        }

        .main-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #ff6b9d 0%, #c2185b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .decorative-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff6b9d, transparent);
          margin: 1.5rem auto;
        }

        .subtitle {
          color: #666;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.8;
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }

        .buttons-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .day-button {
          width: 100%;
          padding: 1.25rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .day-button-active {
          background: linear-gradient(135deg, #ff6b9d 0%, #c2185b 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
        }

        .day-button-locked {
          background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
          color: #999;
          cursor: not-allowed;
          position: relative;
        }

        .day-button-locked::after {
          content: '🔒';
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
          opacity: 0.5;
        }

        .footer-text {
          font-size: 0.85rem;
          color: #999;
          font-style: italic;
          margin-top: 2rem;
        }

        .floating-hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .heart {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.15;
          animation: floatHeart 15s infinite ease-in-out;
        }

        @keyframes floatHeart {
          0% { bottom: -10%; }
          100% { bottom: 110%; }
        }

        @media (max-width: 480px) {
          .content-card {
            padding: 2.5rem 1.5rem;
          }

          .day-button {
            font-size: 1rem;
            padding: 1.1rem 1.5rem;
          }
        }
      `}</style>

      <div className="home-container">
        <div className="floating-hearts">
          <div className="heart" style={{ left: "15%" }}>🌸</div>
          <div className="heart" style={{ left: "35%" }}>💕</div>
          <div className="heart" style={{ left: "55%" }}>🌺</div>
          <div className="heart" style={{ left: "75%" }}>💖</div>
        </div>

        <div className="content-card">
          <div className="title-section">
            <h1 className="main-title">little things</h1>
            <div className="decorative-line"></div>
          </div>

          <p className="subtitle">
            Not a big gesture.<br />
            Not a loud confession.<br />
            Just a few little things… made with care.
          </p>

          <div className="buttons-container">
            <button onClick={() => navigate("rose")} className="day-button day-button-active">
              🌹 Rose Day
            </button>

            <button onClick={() => navigate("propose")} className="day-button day-button-active">
              💌 Propose Day
            </button>

            <button 
              onClick={() => navigate("chocolate")} 
              className="day-button day-button-active chocolate-btn"
            >
              🍫 Chocolate Day
            </button>


            {/* <button disabled className="day-button day-button-locked">🍫 Chocolate Day</button> */}
            <button disabled className="day-button day-button-locked">🧸 Teddy Day</button>
            {/* <button disabled className="day-button day-button-locked">💝 Promise Day</button> */}
            <button 
              onClick={() => navigate("promise")} 
              className="day-button day-button-active"
            >
              💝 Promise Day
            </button>

            <button disabled className="day-button day-button-locked">❤️ Valentine’s Day</button>
          </div>

          <p className="footer-text">some things unfold slowly ✨</p>
        </div>
      </div>
    </>
  );
}
