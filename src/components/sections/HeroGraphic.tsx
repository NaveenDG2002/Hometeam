import { motion, useReducedMotion } from 'motion/react'

type Node = { x: number; y: number; r: number; accent?: boolean }

const nodes: Node[] = [
  { x: 90, y: 330, r: 7 },
  { x: 170, y: 215, r: 9 },
  { x: 275, y: 265, r: 7 },
  { x: 215, y: 115, r: 7 },
  { x: 345, y: 160, r: 10, accent: true },
  { x: 445, y: 200, r: 7 },
  { x: 385, y: 310, r: 9, accent: true },
  { x: 300, y: 385, r: 7 },
  { x: 110, y: 150, r: 6 },
  { x: 470, y: 300, r: 6 },
]

const links: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 4], [2, 4], [2, 6], [4, 5],
  [5, 6], [2, 7], [6, 7], [1, 8], [3, 8], [6, 9], [5, 9],
]

export default function HeroGraphic() {
  const reduce = useReducedMotion()

  return (
    <svg
      viewBox="0 0 520 440"
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      {/* Connections */}
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          className="stroke-brand-100"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      ))}

      {/* Rising arrow */}
      <motion.path
        d="M 50 390 C 180 380, 260 300, 330 210 S 430 110, 466 74"
        fill="none"
        className="stroke-brand-500"
        strokeWidth={7}
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      />
      <motion.polygon
        points="482,58 472.5,84.5 455.5,67.5"
        className="fill-brand-500"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.4 }}
      />

      {/* Nodes */}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          strokeWidth={3}
          className={`stroke-white ${n.accent ? 'fill-brand-500' : 'fill-brand-700'}`}
        />
      ))}
    </svg>
  )
}