"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function Atmosphere() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        left: (i * 41.7) % 100,
        top: (i * 27.3) % 100,
        size: 1 + ((i * 3) % 3),
        delay: (i * 0.37) % 4,
        dur: 3 + ((i * 7) % 5),
      })),
    [],
  );

  return (
    <>
      <div className="holo-grid" aria-hidden />
      <div className="beam" style={{ left: "4%", background: "linear-gradient(180deg, rgba(76,111,255,.55), transparent 72%)" }} aria-hidden />
      <div className="beam" style={{ left: "38%", animationDelay: "-7s", background: "linear-gradient(180deg, rgba(255,94,219,.42), transparent 70%)" }} aria-hidden />
      <div className="beam" style={{ right: "2%", animationDelay: "-13s", background: "linear-gradient(180deg, rgba(168,85,247,.5), transparent 72%)" }} aria-hidden />
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `-${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
          aria-hidden
        />
      ))}
      <div className="vignette" aria-hidden />
      <div className="scanlines" aria-hidden />
      <div className="holo-noise" aria-hidden />
      <CursorGlow />
    </>
  );
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      rx = 0,
      ry = 0,
      raf = 0,
      spin = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      spin += 1.4;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 100}px, ${cy - 100}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) rotate(${spin}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[200px] w-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(125,249,255,.16), rgba(255,94,219,.08) 45%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transition: "opacity .4s",
          filter: "blur(8px)",
        }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[6] h-9 w-9 rounded-full border border-dashed"
        style={{ borderColor: "rgba(125,249,255,.6)", opacity: visible ? 0.8 : 0 }}
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[6] h-[6px] w-[6px] rounded-full"
        style={{ background: "var(--holo)", opacity: visible ? 0.95 : 0, boxShadow: "0 0 16px 4px rgba(125,249,255,.8)" }}
      />
    </>
  );
}

/** Volumetric light shafts anchored to a section. */
export function VaporStrip() {
  const shafts = Array.from({ length: 7 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 overflow-hidden" aria-hidden>
      {shafts.map((i) => (
        <span
          key={i}
          className="absolute bottom-0 origin-bottom"
          style={{
            left: `${(i * 14 + 5) % 100}%`,
            width: 90,
            height: 190,
            marginLeft: -45,
            background: `linear-gradient(0deg, ${i % 2 ? "rgba(255,94,219,.16)" : "rgba(125,249,255,.16)"}, transparent 78%)`,
            filter: "blur(18px)",
            transform: `rotate(${(i % 3) - 1}deg)`,
            animation: `floaty ${6 + (i % 4)}s ease-in-out ${-i * 0.9}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function ScrollFrost() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent" aria-hidden>
        <div
          className="h-full"
          style={{
            width: `${p}%`,
            background: "linear-gradient(90deg,#4c6fff,#7df9ff,#ff5edb)",
            boxShadow: "0 0 18px rgba(125,249,255,.95)",
          }}
        />
      </div>
      <div className="pointer-events-none fixed bottom-5 left-5 z-40 hidden font-mono text-[10px] tracking-[0.3em] text-[color:var(--muted)] md:block" aria-hidden>
        DEPTH {String(Math.round(p)).padStart(3, "0")}%
      </div>
    </>
  );
}
