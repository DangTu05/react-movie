// Error404.jsx
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate để điều hướng

const Error404 = () => {
  const navigate = useNavigate(); // Hook để điều hướng trong React Router

  useEffect(() => {
    // Blood Drips Effect
    const createBloodDrip = () => {
      const drip = document.createElement("div");
      Object.assign(drip.style, {
        position: "absolute",
        top: "-20px",
        left: `${Math.random() * 100}%`,
        width: "2px",
        height: "20px",
        background: "linear-gradient(to bottom, transparent, #ff0000)",
      });
      document.getElementById("blood-drips")?.appendChild(drip);

      anime({
        targets: drip,
        height: [20, 100 + Math.random() * 200],
        top: [-20, window.innerHeight],
        duration: 2000 + Math.random() * 3000,
        easing: "easeInQuad",
        complete: () => drip.remove(),
      });
    };

    const dripInterval = setInterval(createBloodDrip, 200);

    // 3D Tilt Effect
    const handleMouseMove = (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      const container = document.getElementById("hologram-container");
      if (container) {
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };

    // Custom Cursor
    const cursor = document.getElementById("cursor");
    const handleCursorMove = (e) => {
      anime({
        targets: cursor?.children,
        left: e.clientX,
        top: e.clientY,
        duration: 200,
        easing: "easeOutExpo",
      });
    };

    // Blood Circuit Lines
    const circuitContainer = document.getElementById("circuit-container");
    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div");
      Object.assign(line.style, {
        position: "absolute",
        background: "linear-gradient(90deg, transparent, #ff0000, transparent)",
        height: "1px",
        width: `${Math.random() * 200 + 100}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: "0",
      });
      circuitContainer?.appendChild(line);

      anime({
        targets: line,
        opacity: [0, 0.5, 0],
        translateX: [-100, 100],
        delay: Math.random() * 2000,
        duration: 3000,
        loop: true,
        easing: "linear",
      });
    }

    // Glitch Effect
    const createGlitch = () => {
      const errorText = document.getElementById("error-text");
      if (errorText) {
        errorText.style.transform = `translateX(${Math.random() * 10 - 5}px) translateY(${Math.random() * 10 - 5}px)`;
        errorText.style.color = `rgba(255,${Math.random() * 50},${Math.random() * 50},0.9)`;
        setTimeout(() => {
          errorText.style.transform = "none";
          errorText.style.color = "rgba(255,0,0,0.9)";
        }, 100);
      }
    };

    const glitchInterval = setInterval(createGlitch, 2000);

    // Initial Animations
    anime({
      targets: "#error-text",
      translateZ: [-1000, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutExpo",
    });

    anime({
      targets: "#message div",
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 1000 }),
      duration: 1500,
      easing: "easeOutElastic(1, .5)",
    });

    // Event Listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handleCursorMove);

    // Cleanup
    return () => {
      clearInterval(dripInterval);
      clearInterval(glitchInterval);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  const handleButtonHover = (e, isHover) => {
    anime({
      targets: e.target,
      scale: isHover ? 1.1 : 1,
      boxShadow: isHover
        ? "0 0 30px rgba(255,0,0,0.5)"
        : "0 0 20px rgba(255,0,0,0.3)",
      duration: 300,
    });
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#0a0000",
        color: "#ffffff",
        fontFamily: "'Orbitron', sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "none",
        perspective: "1000px",
      }}
    >
      {/* Blood Grid Background */}
      <div
        id="grid-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%), repeating-linear-gradient(0deg, transparent 0%, transparent 1px, rgba(255,0,0,0.1) 1px, rgba(255,0,0,0.1) 2px), repeating-linear-gradient(90deg, transparent 0%, transparent 1px, rgba(255,0,0,0.1) 1px, rgba(255,0,0,0.1) 2px)",
          backgroundSize: "100% 100%, 30px 30px, 30px 30px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* Blood Orb */}
      <div
        id="orb"
        style={{
          position: "fixed",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(20px)",
          animation: "orbPulse 4s infinite ease-in-out",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Blood Dripping Effect */}
        <div
          id="blood-drips"
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />

        {/* Glitched 404 */}
        <div
          id="hologram-container"
          style={{ position: "relative", transformStyle: "preserve-3d" }}
        >
          <div
            id="error-text"
            style={{
              fontSize: "200px",
              fontWeight: 900,
              color: "rgba(255,0,0,0.9)",
              textShadow:
                "0 0 20px rgba(255,0,0,0.5), 0 0 40px rgba(255,0,0,0.3)",
              position: "relative",
              transformStyle: "preserve-3d",
              letterSpacing: "20px",
            }}
          >
            404
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.2) 50%, transparent 100%)",
                animation: "scanline 2s linear infinite",
              }}
            />
          </div>
        </div>

        {/* Error Message */}
        <div
          id="message"
          style={{
            fontSize: "28px",
            color: "#ffffff",
            marginTop: "40px",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "4px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontWeight: 500,
              marginBottom: "15px",
              textShadow: "0 0 10px rgba(255,0,0,0.5)",
            }}
          >
            Fatal Error
          </div>
          <div
            style={{
              fontWeight: 700,
              color: "#ff0000",
            }}
          >
            System Corrupted
          </div>
        </div>

        {/* Blood Button */}
        <div id="button-container" style={{ marginTop: "60px" }}>
          <button
            onClick={() => navigate("/")} // Sử dụng navigate thay vì window.location.href
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            style={{
              padding: "20px 50px",
              background: "none",
              border: "2px solid #ff0000",
              color: "#ff0000",
              fontSize: "20px",
              cursor: "none",
              position: "relative",
              overflow: "hidden",
              fontFamily: "'Orbitron', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "4px",
              transition: "all 0.3s ease",
              transformStyle: "preserve-3d",
              boxShadow: "0 0 20px rgba(255,0,0,0.3)",
            }}
          >
            <span style={{ position: "relative", zIndex: 2 }}>Return</span>
            <div
              className="shine"
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "200%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,0,0,0.2), transparent)",
                transform: "skewX(-20deg)",
              }}
            />
          </button>
        </div>

        {/* Blood Circuit Lines */}
        <div
          id="circuit-container"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Custom Cursor */}
      <div
        id="cursor"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            border: "2px solid #ff0000",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "#ff0000",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          color: "rgba(255,0,0,0.7)",
          borderTop: "1px solid rgba(255,0,0,0.2)",
          letterSpacing: "2px",
        }}
      >
        SYSTEM.TERMINATED.2024 | EMERGENCY_PROTOCOLS_ACTIVE
      </footer>
    </div>
  );
};

export default Error404;
