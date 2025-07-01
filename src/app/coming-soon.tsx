import React from "react";

const text = "Coming Soon";

export default function ComingSoon() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden"
    }}>
      <AnimatedText text={text} />
      <p style={{ marginTop: 24, fontSize: 20, opacity: 0.8 }}>We’re working hard to launch this page!</p>
    </div>
  );
}

function AnimatedText({ text }: { text: string }) {
  return (
    <h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: 2 }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            animation: `fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${i * 0.05}s both`
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </h1>
  );
}
