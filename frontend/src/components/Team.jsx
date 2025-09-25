import React, { useEffect, useRef } from 'react'
import jayAvatar from '../assets/boardteam/Jay Patel.png'
import kathanAvatar from '../assets/boardteam/Kathan Panchal.png'
import tvishaAvatar from '../assets/boardteam/Tvisha Patel.png'
import sarahAvatar from '../assets/boardteam/Sarah Saiyed.png'
import sahilAvatar from '../assets/boardteam/Sahil Bokhani.png'
import mahekAvatar from '../assets/boardteam/Mahek Mehta.png'
import chinmayAvatar from '../assets/boardteam/Chinmay Kela.png'
import snehAvatar from '../assets/boardteam/Sneh Patel.png'
import rudraAvatar from '../assets/boardteam/Rudra Naik.png'
import dhruvinAvatar from '../assets/boardteam/Dhruvin Katakiya.png'
import keshiniAvatar from '../assets/boardteam/Keshini Trivedi.png'
import nikhilAvatar from '../assets/boardteam/Nikhil Raval.png'
import aakanshaAvatar from '../assets/boardteam/Aakansha Rajpal.png'
import aayushAvatar from '../assets/boardteam/Aayush Patel.png'

const teamMembers = [
  {
    name: 'Jay Patel',
    role: 'President',
    avatar: jayAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/jayypatel18/'
    },
  },
  {
    name: 'Kathan Panchal',
    role: 'Vice President',
    avatar: kathanAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/kathan-panchal-2894a924a/',
    },
  },
  {
    name: 'Twisha Patel',
    role: 'General Secretary',
    avatar: tvishaAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/tvisha-patel-028816258/',
    },
  },
  {
    name: 'Sarah Saiyed',
    role: 'Joint Secretary',
    avatar: sarahAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/sarah-saiyed0/',
    },
  },
  {
    name: 'Sahil Bokhani',
    role: 'Organizing Secretary',
    avatar: sahilAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/sahil-bokhani-196006251/',
    },
  },
  {
    name: 'Mahek Mehta',
    role: 'Managing Director',
    avatar: mahekAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/mahek-mehta-b11735231/',
    },
  },
  {
    name: 'Chinmay Kela',
    role: 'Director General',
    avatar: chinmayAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/chinmay-kela-3651ba272/',
    },
  },
  {
    name: 'Sneh Patel',
    role: 'Treasurer',
    avatar: snehAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/snehpatel2510/',
    },
  },
  {
    name: 'Rudra Naik',
    role: 'Logistic Head',
    avatar: rudraAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/rudy7404/',
    },
  },
  {
    name: 'Dhruvin Katakiya',
    role: 'Technical Head',
    avatar: dhruvinAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/dhruvin-katakiya/',
    },
  },
  {
    name: 'Keishini Trivedi',
    role: 'Social Media Head',
    avatar: keshiniAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/keshini-trivedi/',
    },
  },
  {
    name: 'Nikhil Raval',
    role: 'Editor Head',
    avatar: nikhilAvatar,
    socials: {
      linkedin: 'https://www.linkedin.com/in/nikhil-raval-2a89ab293/',
    },
  },
  {
    name: 'Aakanksha Rajpal',
    role: 'Creative Head',
    avatar: aakanshaAvatar,
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Aayush Patel',
    role: 'Graphic Head',
    avatar: aayushAvatar,
    socials: {
      linkedin: '#',
    },
  },
]

function Team() {
  const cardsRef = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation for cards
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('animate-in')
                }, index * 100) // 100ms delay between each card
              }
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" className="relative py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white heading-gradient">Our Team</h2>
          <p className="mt-2 text-white/70">Meet the passionate individuals behind ACES</p>
          <div className="mt-4 mx-auto w-24 h-1 rounded bg-[var(--color-cyan)] animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="team-card relative bg-[rgba(15,16,29,0.65)]/60 border border-[rgba(0,229,255,0.15)] rounded-2xl p-6 text-center text-white/90 shadow-[0_0_40px_0_rgba(0,229,255,0.08)] transition-all duration-500 ease-out transform opacity-0 translate-y-8 hover:scale-105 hover:shadow-[0_0_80px_0_rgba(0,229,255,0.25)] hover:border-[rgba(0,229,255,0.4)] hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(0,229,255,0.05)] via-transparent to-[rgba(0,229,255,0.02)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="particle absolute w-1 h-1 bg-[var(--color-cyan)] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
                <div className="particle absolute w-1 h-1 bg-[var(--color-cyan)] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ top: '60%', right: '20%', animationDelay: '0.5s' }}></div>
                <div className="particle absolute w-1 h-1 bg-[var(--color-cyan)] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{ bottom: '30%', left: '25%', animationDelay: '1s' }}></div>
              </div>

              <div className="relative z-10">
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden ring-1 ring-white/10 shadow-lg transition-all duration-500 group-hover:ring-2 group-hover:ring-[var(--color-cyan)]/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] group-hover:scale-110">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-navy-2)] flex items-center justify-center text-2xl font-bold text-[var(--color-cyan)] relative overflow-hidden">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <>
                        {member.name.split(' ').map(n => n[0]).join('')}
                        {/* Animated ring effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-[var(--color-cyan)]/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 transform transition-all duration-300 group-hover:translate-y-[-2px]">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-cyan)] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[var(--color-cyan)] text-sm mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{member.role}</p>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-4 text-white/70">
                  <a 
                    href={member.socials.linkedin} 
                    className="p-2 rounded-full border border-white/10 hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan)] hover:bg-[var(--color-cyan)]/10 transition-all duration-300 hover:scale-110 hover:rotate-12 transform" 
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6V24h-4v-5.6c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V24h-4V8z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-cyan)]/0 via-[var(--color-cyan)]/5 to-[var(--color-cyan)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced cyan glow with animation */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 flex justify-center">
        <div className="w-[520px] h-[520px] rounded-full blur-3xl opacity-15 shadow-[0_0_240px_120px_#00E5FF] animate-pulse"></div>
      </div>
    </section>
  )
}

export default Team
