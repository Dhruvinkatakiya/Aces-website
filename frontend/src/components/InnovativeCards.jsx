import React, { useMemo } from 'react'

const sampleSnippets = [
  'function innovate() {\n  return "future";\n}',
  'const solve = (x) => x * x + 42;',
  'async function fetchData() {\n  const r = await fetch("/api");\n  return r.json();\n}',
  'class Idea {\n  constructor(seed){ this.seed = seed }\n}',
]

function CodeCard({ x, y, delay, scale, rotate, text }) {
  const cardStyle = {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`,
    padding: '14px 18px',
    borderRadius: '14px',
    border: '1px solid rgba(0,229,255,0.25)',
    background: 'rgba(15,16,29,0.55)',
    boxShadow: '0 0 24px rgba(0,229,255,0.08), inset 0 0 24px rgba(0,229,255,0.05)',
    color: '#9bdcff',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: '12px',
    lineHeight: 1.5,
    whiteSpace: 'pre',
    opacity: 0.8,
    animation: `floatY 10s ease-in-out ${delay}s infinite`,
    pointerEvents: 'none',
  }

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
        <span style={{ width: 10, height: 10, borderRadius: 9999, background: '#ff5f56', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: 9999, background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: 9999, background: '#27c93f', display: 'inline-block' }} />
      </div>
      <pre style={{ margin: 0 }}>{text}</pre>
      <style>{`
        @keyframes floatY {
          0% { transform: translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg) translateY(0); }
          50% { transform: translate(-50%, -52%) scale(${scale}) rotate(${rotate}deg) translateY(-10px); }
          100% { transform: translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg) translateY(0); }
        }
      `}</style>
    </div>
  )
}

function InnovativeCards({ count = 4 }) {
  const cards = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        x: 10 + Math.random() * 80,
        y: 15 + Math.random() * 70,
        delay: Math.random() * 6,
        scale: 0.8 + Math.random() * 0.6,
        rotate: -8 + Math.random() * 16,
        text: sampleSnippets[i % sampleSnippets.length],
      })
    }
    return arr
  }, [count])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }} aria-hidden="true">
      {cards.map(c => (
        <CodeCard key={c.id} {...c} />
      ))}
    </div>
  )
}

export default InnovativeCards


