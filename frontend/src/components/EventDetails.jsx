import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  const events = [
    {
      id: 1,
      title: "Summer Internship Insights",
      date: "21 August, 2024",
      time: "2:35 AM - 4:30 PM",
      location: "C-Auditorium",
      description: "Join us for an exciting 48-hour coding competition where students showcase their programming skills and innovative ideas.",
      image: "",
      status: "completed",
      fullDescription: "This comprehensive workshop will provide students with valuable insights into summer internship opportunities across various tech companies. Industry experts will share their experiences, discuss application strategies, and provide tips for securing internships. The session will cover resume building, interview preparation, and networking strategies that can help students land their dream internships.",
      speakers: ["Dr. Sarah Johnson", "Mr. Alex Chen", "Ms. Priya Sharma"],
      agenda: [
        "10:00 AM - Welcome & Introduction",
        "10:30 AM - Industry Overview",
        "11:15 AM - Application Strategies",
        "12:00 PM - Networking Session",
        "1:00 PM - Lunch Break",
        "2:00 PM - Interview Preparation",
        "3:00 PM - Q&A Session"
      ],
      requirements: ["Laptop", "Resume", "Notebook"],
      contact: "events@aces.com"
    },
    {
      id: 2,
      title: "Founder's Playbook",
      date: "March 10, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "ITNU Campus",
      description: "Industry insigts from experts, network with professionals, boost career growth and knowledge.",
      image: "",
      status: "completed",
      fullDescription: "An exclusive session with successful entrepreneurs who will share their journey from idea to execution. Learn about the challenges they faced, the strategies that worked, and the lessons learned along the way. This interactive session will provide valuable insights for aspiring entrepreneurs and business enthusiasts.",
      speakers: ["John Smith (CEO, TechStart)", "Maria Garcia (Founder, InnovateLab)", "David Lee (Serial Entrepreneur)"],
      agenda: [
        "2:00 PM - Opening Remarks",
        "2:15 PM - Founder Stories",
        "3:00 PM - Panel Discussion",
        "3:30 PM - Networking Break",
        "3:45 PM - Q&A Session",
        "4:00 PM - Closing"
      ],
      requirements: ["Business Card", "Questions Prepared"],
      contact: "founders@aces.com"
    },
    {
      id: 3,
      title: "Insignia 2025",
      date: "February 15-16, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "ITNU Campus",
      description: "*decription*",
      image: "",
      status: "completed",
      fullDescription: "A comprehensive 2-day coding bootcamp designed to enhance your programming skills. The event covers modern web development technologies, advanced data structures, and algorithmic problem-solving techniques. Perfect for students looking to improve their coding abilities and prepare for technical interviews.",
      speakers: [""],
      agenda: [
        "Day 1:",
        "10:00 AM - Web Development Fundamentals",
        "12:00 PM - Lunch Break",
        "1:00 PM - Data Structures Workshop",
        "3:00 PM - Algorithm Practice",
        "5:00 PM - Day 1 Wrap-up",
        "",
        "Day 2:",
        "10:00 AM - Advanced Topics",
        "12:00 PM - Lunch Break",
        "1:00 PM - Hands-on Projects",
        "3:00 PM - Code Review Session",
        "5:00 PM - Certificate Distribution"
      ],
      requirements: ["Laptop with IDE", "Basic Programming Knowledge", "GitHub Account"],
      contact: ""
    },
  ]

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id))
    if (foundEvent) {
      setEvent(foundEvent)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f101d] via-[#1a1b2e] to-[#16213e]">
        <div className="text-[var(--color-cyan)] text-2xl font-bold animate-pulse">
          Loading...
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#0f101d] via-[#1a1b2e] to-[#16213e] text-white text-center p-5">
        <h1 className="text-4xl font-bold mb-5">Event Not Found</h1>
        <p className="mb-8 text-white/70">
          The event you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate('/events')}
          className="px-6 py-3 rounded-lg border-2 border-[var(--color-cyan)] bg-[rgba(0,229,255,0.1)] text-[var(--color-cyan)] text-base font-bold cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--color-cyan)] hover:to-[#0099CC] hover:text-[#0f101d]"
        >
          Back to Events
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f101d] via-[#1a1b2e] to-[#16213e] py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,229,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(155,89,182,0.1)_0%,transparent_50%)] z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/events')}
          className="flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[rgba(0,229,255,0.3)] bg-black/30 text-[var(--color-cyan)] text-sm font-semibold cursor-pointer transition-all duration-300 backdrop-blur-md mb-10 hover:border-[var(--color-cyan)] hover:bg-[rgba(0,229,255,0.1)]"
        >
          ← Back to Events
        </button>

        {/* Event Header */}
        <div className="bg-gradient-to-br from-[#11172b]/90 to-[#0a1537]/95 rounded-3xl p-6 md:p-10 mb-8 border border-[rgba(0,229,255,0.3)] shadow-[0_10px_40px_rgba(0,229,255,0.15)] backdrop-blur-xl relative overflow-hidden">
          {/* Status Badge */}
          <div className={`absolute top-5 right-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/10 ${
            event.status === 'upcoming'
              ? 'bg-gradient-to-br from-[var(--color-cyan)] to-[#0099CC] text-[#0f101d]'
              : 'bg-gradient-to-br from-[var(--color-cyan)] to-[#0A1537] text-white'
          }`}>
            {event.status}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-[var(--color-cyan)] mb-6 leading-tight drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            {event.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div className="flex items-center gap-3 p-4 bg-[rgba(0,229,255,0.05)] rounded-xl border border-[rgba(0,229,255,0.1)]">
              <span className="text-[var(--color-cyan)] text-xl">📅</span>
              <div>
                <div className="text-white/70 text-sm">Date</div>
                <div className="text-white font-semibold">{event.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[rgba(0,229,255,0.05)] rounded-xl border border-[rgba(0,229,255,0.1)]">
              <span className="text-[var(--color-cyan)] text-xl">🕒</span>
              <div>
                <div className="text-white/70 text-sm">Time</div>
                <div className="text-white font-semibold">{event.time}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[rgba(0,229,255,0.05)] rounded-xl border border-[rgba(0,229,255,0.1)]">
              <span className="text-[var(--color-cyan)] text-xl">📍</span>
              <div>
                <div className="text-white/70 text-sm">Location</div>
                <div className="text-white font-semibold">{event.location}</div>
              </div>
            </div>
          </div>

          <p className="text-lg text-white/85 leading-relaxed m-0">
            {event.description}
          </p>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Full Description */}
          <div className="bg-gradient-to-br from-[#11172b]/90 to-[#0a1537]/95 rounded-2xl p-6 md:p-8 border border-[rgba(0,229,255,0.3)] shadow-[0_10px_40px_rgba(0,229,255,0.15)] backdrop-blur-xl h-full">
            <h3 className="text-2xl font-bold text-[var(--color-cyan)] mb-5 flex items-center gap-2">
              📝 About This Event
            </h3>
            <p className="text-base text-white/85 leading-relaxed m-0">
              {event.fullDescription}
            </p>
          </div>

          {/* Speakers */}
          <div className="bg-gradient-to-br from-[#11172b]/90 to-[#0a1537]/95 rounded-2xl p-6 md:p-8 border border-[rgba(0,229,255,0.3)] shadow-[0_10px_40px_rgba(0,229,255,0.15)] backdrop-blur-xl h-full">
            <h3 className="text-2xl font-bold text-[var(--color-cyan)] mb-5 flex items-center gap-2">
              👥 Speakers
            </h3>
            <div className="flex flex-col gap-2.5">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="p-3 bg-[rgba(0,229,255,0.05)] rounded-lg border border-[rgba(0,229,255,0.1)] text-white text-sm">
                  {speaker}
                </div>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div className="bg-gradient-to-br from-[#11172b]/90 to-[#0a1537]/95 rounded-2xl p-6 md:p-8 border border-[rgba(0,229,255,0.3)] shadow-[0_10px_40px_rgba(0,229,255,0.15)] backdrop-blur-xl h-full">
            <h3 className="text-2xl font-bold text-[var(--color-cyan)] mb-5 flex items-center gap-2">
              📋 Agenda
            </h3>
            <div className="flex flex-col gap-2">
              {event.agenda.map((item, index) => (
                <div key={index} className={`p-2.5 rounded-lg border border-[rgba(0,229,255,0.1)] ${
                  item.startsWith('Day') || item === '' 
                    ? 'bg-[rgba(0,229,255,0.1)] text-[var(--color-cyan)] text-base font-bold' 
                    : 'bg-[rgba(0,229,255,0.05)] text-white text-sm font-normal'
                }`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gradient-to-br from-[#11172b]/90 to-[#0a1537]/95 rounded-2xl p-6 md:p-8 border border-[rgba(0,229,255,0.3)] shadow-[0_10px_40px_rgba(0,229,255,0.15)] backdrop-blur-xl h-full">
            <h3 className="text-2xl font-bold text-[var(--color-cyan)] mb-5 flex items-center gap-2">
              📦 Requirements
            </h3>
            <div className="flex flex-col gap-2.5">
              {event.requirements.map((req, index) => (
                <div key={index} className="p-3 bg-[rgba(0,229,255,0.05)] rounded-lg border border-[rgba(0,229,255,0.1)] text-white text-sm flex items-center gap-2">
                  <span className="text-[var(--color-cyan)]">✓</span>
                  {req}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#11172b]/90 to-[#0a1537]/95 rounded-2xl p-6 md:p-8 border border-[rgba(0,229,255,0.3)] shadow-[0_10px_40px_rgba(0,229,255,0.15)] backdrop-blur-xl text-center">
          <h3 className="text-2xl font-bold text-[var(--color-cyan)] mb-4">
            📞 Contact Information
          </h3>
          <p className="text-base text-white/85 mb-5">
            For more information about this event, please contact us at:
          </p>
          <a
            href={`mailto:${event.contact}`}
            className="inline-block px-6 py-3 rounded-full border-2 border-[var(--color-cyan)] bg-[rgba(0,229,255,0.1)] text-[var(--color-cyan)] text-base font-bold no-underline cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--color-cyan)] hover:to-[#0099CC] hover:text-[#0f101d]"
          >
            {event.contact}
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
