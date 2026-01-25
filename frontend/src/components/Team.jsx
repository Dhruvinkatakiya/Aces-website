import React, { useEffect, useRef } from 'react'
import useCachedImage from '../hooks/useCachedImage'


const teamMembers = [
  {
    name: 'Devam Patel',
    role: 'President',
    avatar: 'https://i.postimg.cc/Z5c4RCcG/President_Devam_Patel.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/devam-patel-5aa2582b1/'
    },
  },
  {
    name: 'Manan Suri',
    role: 'Vice President',
    avatar: 'https://i.postimg.cc/Hk2dxVzT/Vice_President_Manan_Suri.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/manan-suri-622657284/',
    },
  },
  {
    name: 'Smit Shah',
    role: 'General Secretary',
    avatar: 'https://i.postimg.cc/fbqT5Dc8/Tvisha-Patel.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/smit-shah-51a9b8284/',
    },
  },
  {
    name: 'Tanisha Desai',
    role: 'Joint Secretary',
    avatar: 'https://i.postimg.cc/523b063w/Joint_Secretary_Tanisha_Desai.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanisha-desai-a39657284/',
    },
  },
  {
    name: 'Sanchita Pathak',
    role: 'Joint Secretary',
    avatar: 'https://i.postimg.cc/P5hdTmm3/Joint_Secretary_Sanchita_Pathak.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sanchita-pathak-752a86288/',
    },
  },
  {
    name: 'Tapan Mehta',
    role: 'Organizing Secretary',
    avatar: 'https://i.postimg.cc/VkRm6dRh/Organizing_Secretary_Tapan_Mehta.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tapan-mehta-5050a2284/',
    },
  },
  {
    name: 'Bhavya Vasavada',
    role: 'Managing Director',
    avatar: 'https://i.postimg.cc/nhkpzCkP/Managing_Director_Bhavya_Vasavada.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/bhavya-vasavada-85ab49323/',
    },
  },
  {
    name: 'Priyanshi Jhala',
    role: 'Head of Executives',
    avatar: 'https://i.postimg.cc/NjYQB11N/Head_of_Executives_Priyanshi_Zhala.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/priyanshi-jhala/',
    },
  },
  {
    name: 'Saanvi Ganna',
    role: 'Director General',
    avatar: 'https://i.postimg.cc/0yx9Ppp6/Director_General_Saanvi_Ganna.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/saanvi-ganna-93a659328/',
    },
  },
  {
    name: 'Tanvi Madani',
    role: 'Technical Director',
    avatar: 'https://i.postimg.cc/YCfqWXpG/Technical-Director-Tanvi-Madani.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanvi-madani',
    },
  },
  {
    name: 'Bhavya Shah',
    role: 'Technical Director',
    avatar: 'https://i.postimg.cc/d3rsqCzN/Dhruvin-Katakiya.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/bhavyamshah/',
    },
  },
  
  {
    name: 'Yug Dave',
    role: 'Logistic Head',
    avatar: 'https://i.postimg.cc/qv5ZdgGR/Rudra-Naik.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/yug-dave-268a60286/',
    },
  },
  {
    name: 'Shyam Ranipa',
    role: 'Treasurer',
    avatar: 'https://i.postimg.cc/k4wTRPZ5/Treasurer-Shyam-Ranipa.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/shyamranipa/',
    },
  },
  {
    name: 'Tirth Shah',
    role: 'Social Marketing Head',
    avatar: 'https://i.postimg.cc/JzqMnGqd/Marketing_Head_Tirth_Shah.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tirth-shah-36b689337/',
    },
  },
  {
    name: 'Ayush Bhatnagar',
    role: 'Editor Head',
    avatar: 'https://i.postimg.cc/dVvJw886/Editor_in_Chief_Ayush_Bhatnagar.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ayushbhatnagar2004/',
    },
  },
  {
    name: 'Jinesh Dugar',
    role: 'Graphic Head',
    avatar: 'https://i.postimg.cc/vZsZtHnc/Aayush-Patel.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jinesh-dugar-/',
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

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
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
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-1 ring-white/10 shadow-lg transition-all duration-500 group-hover:ring-2 group-hover:ring-[var(--color-cyan)]/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] group-hover:scale-110">
                  <AvatarImage name={member.name} src={member.avatar} />
                </div>
                
                <div className="mt-3 transform transition-all duration-300 group-hover:translate-y-[-2px]">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[var(--color-cyan)] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[var(--color-cyan)] text-xs sm:text-sm mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{member.role}</p>
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

function AvatarImage({ name, src }) {
  const cached = useCachedImage(src)
  const initials = name.split(' ').map(n => n[0]).join('')
  return (
    <div className="w-full h-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-navy-2)] flex items-center justify-center text-2xl font-bold text-[var(--color-cyan)] relative overflow-hidden">
      {cached || src ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={cached || src} alt={name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      ) : (
        <>
          {initials}
          <div className="absolute inset-0 rounded-full border-2 border-[var(--color-cyan)]/30 animate-ping opacity-0 group-hover:opacity-100"></div>
        </>
      )}
    </div>
  )
}
