import React, { useState } from "react";

export default function ProposeDay({ goBack }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <style>{`
        .propose-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, #fff0f3 0%, #ffe3ec 50%, #fff7fa 100%);
          position: relative;
          overflow: hidden;
        }

        .propose-container::before,
        .propose-container::after {
          content: '';
          position: absolute;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255,105,135,0.08), transparent 70%);
          animation: float 22s ease-in-out infinite;
        }

        .propose-container::after {
          animation-direction: reverse;
          animation-duration: 28s;
        }

        @keyframes float {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(30px,-30px); }
        }

        .propose-card {
          max-width: 520px;
          width: 100%;
          background: rgba(255,255,255,0.96);
          border-radius: 32px;
          padding: 3rem 2.2rem;
          text-align: center;
          box-shadow: 0 12px 45px rgba(0,0,0,0.12);
          position: relative;
          z-index: 1;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .propose-title {
          font-size: clamp(2.4rem, 6vw, 3.3rem);
          font-weight: 700;
          background: linear-gradient(135deg, #ff5f87, #c2185b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .divider {
          width: 70px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff5f87, transparent);
          margin: 1.5rem auto 2rem;
        }

        .propose-text {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #555;
          margin-bottom: 2.5rem;
          padding: 0 0.5rem;
        }

        .reveal-box {
          background: #fff7fa;
          border-radius: 24px;
          padding: 2rem 1.5rem;
          margin-bottom: 2.2rem;
          box-shadow: inset 0 0 0 1px rgba(255,105,135,0.15);
          animation: fadeIn 0.8s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .proposal-line {
          font-size: 1.1rem;
          font-weight: 500;
          color: #c2185b;
          margin-top: 1.1rem;
        }

        .action-btn {
          width: 100%;
          padding: 1.25rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #ff5f87, #c2185b);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(255,95,135,0.4);
          margin-bottom: 1.2rem;
        }

        .action-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,95,135,0.55);
        }

        .action-btn:active {
          transform: scale(0.97);
        }

        .secondary-btn {
          background: none;
          border: none;
          color: #999;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .floating-icons span {
          position: absolute;
          font-size: 1.6rem;
          opacity: 0.15;
          animation: rise 16s infinite ease-in-out;
        }

        .floating-icons span:nth-child(1){ left:10%; animation-delay:0s;}
        .floating-icons span:nth-child(2){ left:35%; animation-delay:4s;}
        .floating-icons span:nth-child(3){ left:60%; animation-delay:8s;}
        .floating-icons span:nth-child(4){ left:85%; animation-delay:12s;}

        @keyframes rise {
          0% { bottom:-10%; transform:translateX(0) rotate(0); }
          50% { transform:translateX(30px) rotate(180deg); }
          100% { bottom:110%; transform:translateX(-30px) rotate(360deg); }
        }

        @media (max-width:480px) {
          .propose-card { padding: 2.5rem 1.6rem; }
          .propose-text { font-size: 1rem; }
        }
      `}</style>

      <div className="propose-container">
        <div className="floating-icons">
          <span>💌</span>
          <span>🌹</span>
          <span>💖</span>
          <span>✨</span>
        </div>

        <div className="propose-card">
          <h1 className="propose-title">Propose Day</h1>
          <div className="divider"></div>

          <p className="propose-text">
            I’m not good with big speeches.<br />
            But I’m good at noticing little things—<br />
            and somehow, all of them remind me of <strong>my cutie pie</strong>.
          </p>

          {revealed && (
            <div className="reveal-box">
              <p>
                Somewhere between random talks,<br />
                shared silences, and small laughs…
              </p>

              <p>
                I didn’t plan it.<br />
                It just happened — naturally, quietly.
              </p>

              <p className="proposal-line">
                I don’t know exactly when it happened,<br />
                but somewhere along the way… <br />
                I started liking you.
                ~ cutie pie
              </p>

              <p style={{ marginTop: "0.9rem", color: "#777", fontSize: "0.95rem" }}>
                I really enjoy the time we spend together —
                meeting you, talking, eating, laughing.
              </p>

              <p style={{ marginTop: "0.8rem", color: "#777", fontSize: "0.95rem" }}>
                No expectations.<br />
                Just something honest I wanted you to know.
              </p>
            </div>
          )}

          {!revealed ? (
            <button
              className="action-btn"
              onClick={() => setRevealed(true)}
            >
              💌 One honest thought
            </button>
          ) : (
            <button
              className="action-btn"
              onClick={goBack}
            >
              🌸 Go back gently
            </button>
          )}

          <button className="secondary-btn" onClick={goBack}>
            take it slow ✨
          </button>

          <p style={{ fontSize: "0.8rem", color: "#aaa", marginTop: "1rem" }}>
            some feelings don’t need big words ✨
          </p>
        </div>
      </div>
    </>
  );
}
