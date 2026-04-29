'use client';

import { useEffect, useRef, useState } from 'react';

// ─── Tuning ──────────────────────────────────────────────────────────────────
//  Both values are frame-rate independent (units: per second).
//  Formula: t = 1 - e^(-speed * dt)  →  same feel at 60 Hz, 120 Hz, 144 Hz.
//  DOT_SPEED  — dot chases the cursor each frame. Try 4 (lazy) → 12 (snappy).
//  RING_SPEED — ring trails further behind.   Try 2 (dreamy) → 6 (tight).
const DOT_SPEED = 1.5;
// ─────────────────────────────────────────────────────────────────────────────

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Mutable refs updated every frame — never triggers React re-renders
  const mouse = useRef({ x: -200, y: -200 });
  const dotPos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafId = useRef<number>(0);
  const lastTime = useRef<number>(0);

  // Mounting guard: stays false on SSR and on coarse-pointer devices
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Only run on desktop (fine pointer = mouse/trackpad; false on touch)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setActive(true);
    document.documentElement.style.cursor = 'none';

    // ── Utilities ─────────────────────────────────────────────────────────────
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const applyHover = (on: boolean, el?: HTMLElement | null) => {
      const label = on && el ? (el.dataset.cursorText ?? '') : '';

      if (textRef.current) {
        textRef.current.textContent = label;
        textRef.current.classList.toggle('cursor-text--visible', on && label.length > 0);
      }
      dotRef.current?.classList.toggle('cursor-dot--hover', on);
      ringRef.current?.classList.toggle('cursor-ring--hover', on);
    };

    // ── Event handlers ────────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        'a, button, [data-cursor]'
      );
      if (el) applyHover(true, el);
    };

    const onOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        'a, button, [data-cursor]'
      );
      if (!el) return;
      // Mouse moved to a child of the same interactive element — keep hover active
      const related = e.relatedTarget as HTMLElement | null;
      if (related && el.contains(related)) return;
      applyHover(false);
    };

    // Hide cursor when mouse leaves the browser window
    const onDocLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        dotRef.current?.classList.add('cursor--out');
        ringRef.current?.classList.add('cursor--out');
      }
    };

    const onDocEnter = () => {
      dotRef.current?.classList.remove('cursor--out');
      ringRef.current?.classList.remove('cursor--out');
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    document.addEventListener('mouseleave', onDocLeave, { passive: true });
    document.addEventListener('mouseenter', onDocEnter, { passive: true });

    // ── Animation loop ────────────────────────────────────────────────────────
    const tick = (now: DOMHighResTimeStamp) => {
      rafId.current = requestAnimationFrame(tick);

      const dt = Math.min((now - lastTime.current) / 1000, 0.1); // seconds, capped at 100ms
      lastTime.current = now;

      // Dot: exponential lerp — chases the cursor, fast when far, slow when close
      const dotT = prefersReduced ? 1 : 1 - Math.exp(-DOT_SPEED * dt);
      dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, dotT);
      dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, dotT);
      ringPos.current.x = dotPos.current.x;
      ringPos.current.y = dotPos.current.y;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
    };

    lastTime.current = performance.now();
    rafId.current = requestAnimationFrame(tick);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId.current);
      document.documentElement.style.cursor = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onDocLeave);
      document.removeEventListener('mouseenter', onDocEnter);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      {/* Small center dot — snaps to pointer nearly instantly */}
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />

      {/* Larger trailing ring — lags behind for fluid feel */}
      <div ref={ringRef} aria-hidden="true" className="cursor-ring">
        <span ref={textRef} className="cursor-text" />
      </div>
    </>
  );
}
