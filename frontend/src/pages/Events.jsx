import React from 'react'
import { motion } from 'framer-motion'

const events = [
  {
    id: 'hack-night',
    title: 'Hack Night',
    date: 'Oct 12, 2025',
    summary: 'Sprint-build something wild with mentors on deck.',
  },
  {
    id: 'ai-workshop',
    title: 'AI Workshop',
    date: 'Nov 02, 2025',
    summary: 'Hands-on intro to modern AI tooling and workflows.',
  },
  {
    id: 'web3-challenge',
    title: 'Web3 Challenge',
    date: 'Nov 20, 2025',
    summary: 'Ship a dApp in a day; prizes for best UX and utility.',
  },
]

function Events() {
  return (
    <section id="events" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold">Upcoming Events</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {events.map((e, idx) => (
            <motion.article
              key={e.id}
              className="relative rounded-2xl border border-[rgba(0,229,255,0.18)] bg-[rgba(15,16,29,0.65)]/70 p-6 shadow-[0_0_28px_0_rgba(0,229,255,0.10)] hover:shadow-[0_0_44px_6px_rgba(0,229,255,0.20)] anim-tilt"
              variants={{
                hidden: { y: 18, opacity: 0 },
                show: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-semibold">{e.title}</h3>
                <span className="text-[var(--color-cyan)] text-xs font-semibold bg-white/5 border border-white/10 rounded-full px-2 py-1">
                  {e.date}
                </span>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{e.summary}</p>

              <div className="mt-5 flex items-center justify-between">
                <button
                  className="relative overflow-hidden text-white font-semibold py-2 px-4 rounded-lg border border-[var(--color-cyan)] bg-transparent hover:bg-[rgba(0,229,255,0.12)] anim-glow"
                >
                  Register
                </button>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="w-8 h-8 rounded-full border border-[rgba(0,229,255,0.2)] flex items-center justify-center text-[var(--color-cyan)]"
                >
                  →
                </motion.div>
              </div>

              <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 -top-10 w-[380px] h-[380px] rounded-full blur-3xl opacity-10 shadow-[0_0_180px_80px_#00E5FF]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Events
