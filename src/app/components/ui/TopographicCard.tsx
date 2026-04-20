import React from "react";

// src/components/TopographicCard.tsx
import { useRef, useState, useCallback } from "react";
import "./Styles/TopographicCard.css";

interface Props {
  src: string;
  figLabel?: string;
  sectorLabel?: string;
  statusLabel?: string;
}

export default function TopographicCard({
  src,
  figLabel = "FIG 1.1 — SECTOR 04",
  statusLabel = "TOPOGRAPHICAL SCAN ACTIVE",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 }); // offscreen default
  const [inside, setInside] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current!.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      className="topo-card"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => setInside(false)}
    >
      {/* Base image */}
      <img src={src} alt={figLabel} className="topo-image" draggable={false} />

      {/* Grid overlay */}
      <div className="topo-grid" />

      {/* Cursor: outer ring + dot */}
      {inside && (
        <div
          className="topo-cursor"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        >
          <div className="topo-cursor-ring" />
          <div className="topo-cursor-dot" />
        </div>
      )}

      {/* Responsive radial glow that follows cursor */}
      {inside && (
        <div
          className="topo-glow"
          style={{
            background: `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, rgba(255,90,0,0.07) 0%, transparent 80%)`,
          }}
        />
      )}

      {/* Bottom label bar */}
      <div className="topo-footer">
        <span className="topo-fig">{figLabel}</span>
        <span className="topo-status">{statusLabel}</span>
      </div>
    </div>
  );
}