import React, { useState } from "react";

function App() {
  const [status20, setStatus20] = useState("Idle");
  const [status200, setStatus200] = useState("Idle");

  const [loading20, setLoading20] = useState(false);
  const [loading200, setLoading200] = useState(false);

  const API = "https://market-depth.onrender.com";

  const start20 = async () => {
    setLoading20(true);
    await fetch(`${API}/start20`);
    setStatus20("🟢 Capturing 20 Level...");
    setLoading20(false);
  };

  const stop20 = async () => {
    setLoading20(true);
    await fetch(`${API}/stop20`);
    setStatus20("🔴 20 Level Capture Stopped");
    setLoading20(false);
  };

  const start200 = async () => {
    setLoading200(true);
    await fetch(`${API}/start200`);
    setStatus200("🟢 Capturing 200 Level...");
    setLoading200(false);
  };

  const stop200 = async () => {
    setLoading200(true);
    await fetch(`${API}/stop200`);
    setStatus200("🔴 200 Level Capture Stopped");
    setLoading200(false);
  };

  return (
    <div
      style={{
        padding: 30,
        fontFamily: "Arial",
        maxWidth: 500,
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <h2 style={{ textAlign: "center" }}>📊 vayu Market Depth Capture</h2>

      {/* ------------------- 20 Level ------------------ */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: 20,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h3>20 Level Depth</h3>

        <button
          onClick={start20}
          disabled={loading20}
          style={{
            padding: "10px 16px",
            marginRight: 10,
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          ▶ Start 20 Level
        </button>

        <button
          onClick={stop20}
          disabled={loading20}
          style={{
            padding: "10px 16px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          ⏹ Stop 20 Level
        </button>

        <p style={{ marginTop: 10 }}>{status20}</p>
      </div>

      {/* ------------------- 200 Level ------------------ */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: 20,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h3>200 Level Depth</h3>

        <button
          onClick={start200}
          disabled={loading200}
          style={{
            padding: "10px 16px",
            marginRight: 10,
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          ▶ Start 200 Level
        </button>

        <button
          onClick={stop200}
          disabled={loading200}
          style={{
            padding: "10px 16px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          ⏹ Stop 200 Level
        </button>

        <p style={{ marginTop: 10 }}>{status200}</p>
      </div>

      {/* ------------------- Download Buttons ------------------ */}
      <div style={{ textAlign: "center" }}>
        <a href={`${API}/download/20`}>
          <button
            style={{
              padding: "10px 18px",
              marginRight: 10,
              background: "#6f42c1",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            ⬇ Download 20 Level CSV
          </button>
        </a>

        <a href={`${API}/download/200`}>
          <button
            style={{
              padding: "10px 18px",
              background: "#fd7e14",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            ⬇ Download 200 Level CSV
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
