"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      style={{
        opacity: entered ? 1 : 0,
        filter: entered ? "blur(0px) saturate(1)" : "blur(16px) saturate(.4)",
        transform: entered ? "none" : "scale(.99) translateY(14px)",
        transition: "opacity .7s ease, filter .9s ease, transform .8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {children}
    </div>
  );
}
