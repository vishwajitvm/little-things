import React, { useEffect, useState } from "react";

export default function ChocolateDay({ goBack }) {
  const [visible, setVisible] = useState(false);
  const [bite, setBite] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const handleBite = () => {
    if (bite < 3) setBite(bite + 1);
  };

  const cloudMessages = [
    "",
    "Hehe… that was a soft bite ☁️",
    "Slowly slowly, cutie pie 🤎",
    "All gone… but the sweetness stays ❤️"
  ];

  return (
    <>
      <style>{`
        .choco-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #fce4ec 0%, #f8bbd0 50%, #d7ccc8 100%);
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Background floating clouds */
        .cloud-bg {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.5;
          filter: blur(12px);
          animation: floatCloud linear infinite;
        }

        .cloud1 {
          width: 200px;
          height: 80px;
          top: 20%;
          left: -200px;
          animation-duration: 60s;
        }

        .cloud2 {
          width: 150px;
          height: 60px;
          top: 60%;
          left: -150px;
          animation-duration: 75s;
        }

        @keyframes floatCloud {
          from { transform: translateX(0); }
          to { transform: translateX(120vw); }
        }

        .choco-card {
          max-width: 560px;
          width: 100%;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 3rem 2rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
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
          color: #6d4c41;
        }

        .choco-message {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #4e342e;
        }

        .highlight {
          color: #8d6e63;
          font-weight: 600;
        }

        /* Chocolate wrapper */
        .chocolate-wrapper {
          margin-top: 3rem;
          cursor: pointer;
          display: inline-block;
          position: relative;
          overflow: visible;
        }

        .chocolate-bar {
          width: 220px;
          height: 90px;
          background: linear-gradient(145deg, #8d6e63, #5d4037);
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          transition: 0.5s ease;
        }

        .chocolate-bar::before {
          content: '';
          position: absolute;
          inset: 12px;
          background: repeating-linear-gradient(
            90deg,
            #6d4c41 0px,
            #6d4c41 35px,
            #5d4037 35px,
            #5d4037 70px
          );
          border-radius: 12px;
        }

        /* Smooth bite shapes */
        .bite-1 {
          clip-path: ellipse(80% 90% at 85% 10%);
        }

        .bite-2 {
          clip-path: ellipse(65% 90% at 90% 15%);
        }

        .bite-3 {
          clip-path: ellipse(50% 85% at 95% 20%);
        }

        /* Speech cloud */
        .speech-cloud {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: #5d4037;
          padding: 14px 20px;
          border-radius: 20px;
          font-size: 0.95rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          animation: floatUpFade 0.4s ease;
          max-width: 240px;
          text-align: center;
          line-height: 1.4;
        }

        .speech-cloud::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 10px;
          border-style: solid;
          border-color: white transparent transparent transparent;
        }

        @keyframes floatUpFade {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .eat-text {
          margin-top: 1rem;
          font-size: 1rem;
          color: #5d4037;
        }

        .reset-btn {
          margin-top: 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          color: #6d4c41;
        }

        .back-btn {
          margin-top: 2.5rem;
          padding: 0.9rem 2rem;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #a1887f, #8d6e63);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .back-btn:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div className="choco-container">

        <div className="cloud-bg cloud1"></div>
        <div className="cloud-bg cloud2"></div>

        <div className="choco-card">
          <h1 className="choco-title">Happy Chocolate Day 🍫</h1>

          <div className="choco-message">
            <span className="highlight">My cutie pie, Drrishti</span> ☁️🤎  
            <br /><br />
            My cutie pie…  
            chocolate melts gently, just like the calm feeling I get around you.
            <br /><br />
            So here’s a little chocolate — just for you.
          </div>

          <div className="chocolate-wrapper" onClick={handleBite}>
            {bite > 0 && (
              <div key={bite} className="speech-cloud">
                {cloudMessages[bite]}
              </div>
            )}

            <br />
            <br />
            <br />

            <div
              className={`chocolate-bar ${
                bite === 1 ? "bite-1" :
                bite === 2 ? "bite-2" :
                bite === 3 ? "bite-3" : ""
              }`}
            ></div>

            {bite === 0 && (
              <div className="eat-text">
                Click here to eat it, cutie pie 🍫
              </div>
            )}
          </div>

          {bite === 3 && (
            <div className="reset-btn" onClick={() => setBite(0)}>
              Want another one? 🍫
            </div>
          )}
          <br />
          <br />

          <button className="back-btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
