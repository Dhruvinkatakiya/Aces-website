import React, { useState, useEffect } from 'react';

const getRandomPosition = () => {
  // x and y can be anywhere from 0% to 100%
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return { x, y };
};

const FloatingCode = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  // Generate positions for each snippet
  const codeData = [
    {
      id: 1,
      content: `// ACES Core
const aces = {
  name: "ACES",
  vision: "Excellence"
}`,
      delay: 0,
      duration: 8
    },
    {
      id: 2,
      content: `function innovate() {
  return future
}`,
      delay: 1,
      duration: 10
    },
    {
      id: 3,
      content: `console.log("ACES")`,
      delay: 2,
      duration: 7
    },
    {
      id: 4,
      content: `# Engineering
class Engineer {
  def solve()
  return "Solution"
}`,
      delay: 3,
      duration: 9
    },
    {
      id: 5,
      content: `# ACES = Innovation`,
      delay: 1.5,
      duration: 6
    },
    {
      id: 6,
      content: `if (passion) {
  success = true
}`,
      delay: 2.5,
      duration: 8.5
    },
    {
      id: 7,
      content: `npm run aces
✓ Building future...
$ git commit -m "Innovation"`,
      delay: 4,
      duration: 11
    },
    {
      id: 8,
      content: `const excellence = true`,
      delay: 0.5,
      duration: 7.5
    },
    {
      id: 9,
      content: `// Innovation Hub
const creativity = {
  level: "max",
  impact: "global"
}`,
      delay: 3.5,
      duration: 9.5
    },
    {
      id: 10,
      content: `def build_future():
    return "ACES"`,
      delay: 1.8,
      duration: 8.2
    },
    {
      id: 11,
      content: `// Code Excellence
const passion = true`,
      delay: 2.2,
      duration: 7.8
    },
    {
      id: 12,
      content: `class Future {
  build() {
    return "ACES"
  }
}`,
      delay: 1.2,
      duration: 9.2
    },
    {
      id: 13,
      content: `# Tech Innovation
def create() {
  return "Excellence"
}`,
      delay: 3.8,
      duration: 8.8
    },
    {
      id: 14,
      content: `const innovation = {
  level: "maximum",
  impact: "global"
}`,
      delay: 0.8,
      duration: 10.5
    },
    {
      id: 15,
      content: `// Engineering
function solve() {
  return "Solution"
}`,
      delay: 4.2,
      duration: 7.2
    }
  ].map(snippet => ({
    ...snippet,
    ...getRandomPosition()
  }));

  useEffect(() => {
    setCodeSnippets(codeData);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0
    }}>
      {codeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          style={{
            position: 'absolute',
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.15,
            fontSize: '12px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            color: '#00E5FF',
            background: 'rgba(0, 229, 255, 0.05)',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid rgba(0, 229, 255, 0.1)',
            backdropFilter: 'blur(2px)',
            whiteSpace: 'pre-line',
            lineHeight: '1.4',
            animation: `float ${snippet.duration}s ease-in-out ${snippet.delay}s infinite alternate`,
            maxWidth: '180px',
            wordBreak: 'break-word'
          }}
        >
          {snippet.content}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(0px) scale(1) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translate(-50%, -50%) translateY(-8px) scale(1.03) rotate(1deg);
            opacity: 0.18;
          }
          50% {
            transform: translate(-50%, -50%) translateY(-16px) scale(1.05) rotate(-1deg);
            opacity: 0.22;
          }
          75% {
            transform: translate(-50%, -50%) translateY(-8px) scale(1.03) rotate(1deg);
            opacity: 0.18;
          }
          100% {
            transform: translate(-50%, -50%) translateY(0px) scale(1) rotate(0deg);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCode;
