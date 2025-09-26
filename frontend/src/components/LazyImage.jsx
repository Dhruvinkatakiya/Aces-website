import React, { useEffect, useRef, useState } from 'react'

export default function LazyImage({ src, alt = '', className = '', placeholder = '', width, height, onLoad }) {
  const [isVisible, setIsVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            io.disconnect()
          }
        })
      },
      { rootMargin: '200px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ width, height }} className={className}>
      {!loaded && placeholder && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={placeholder} className="w-full h-full object-cover opacity-60" />
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={(e) => {
            setLoaded(true)
            onLoad && onLoad(e)
          }}
        />
      )}
    </div>
  )
}


