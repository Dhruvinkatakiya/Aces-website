import React, { useEffect, useRef, useState, useCallback, memo } from 'react'
import { ImageOptimizer, supportsWebP } from '../utils/optimization'

const LazyImage = memo(function LazyImage({ 
  src, 
  alt = '', 
  className = '', 
  placeholder = '', 
  width, 
  height, 
  onLoad,
  priority = false,
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(priority) // Load immediately if priority
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [webpSupported, setWebpSupported] = useState(false)
  const [optimizedSrc, setOptimizedSrc] = useState(src)
  const containerRef = useRef(null)
  const observerRef = useRef(null)
  const imageOptimizerRef = useRef(null)

  // Initialize image optimizer
  useEffect(() => {
    imageOptimizerRef.current = new ImageOptimizer()
    
    // Check WebP support
    supportsWebP().then(setWebpSupported)
    
    return () => {
      imageOptimizerRef.current?.destroy()
    }
  }, [])

  // Generate optimized image source
  useEffect(() => {
    if (src && imageOptimizerRef.current) {
      const options = {
        width: width ? parseInt(width) : undefined,
        height: height ? parseInt(height) : undefined,
        quality,
        format: webpSupported ? 'webp' : 'auto'
      }
      
      const optimized = imageOptimizerRef.current.generateOptimizedUrl(src, options)
      setOptimizedSrc(optimized)
    }
  }, [src, width, height, quality, webpSupported])

  // Memoized load handler
  const handleLoad = useCallback((e) => {
    setLoaded(true)
    setError(false)
    onLoad?.(e)
  }, [onLoad])

  // Memoized error handler
  const handleError = useCallback(() => {
    setError(true)
    setLoaded(false)
    // Fallback to original src if optimized fails
    if (optimizedSrc !== src) {
      setOptimizedSrc(src)
    }
  }, [optimizedSrc, src])

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority) return // Skip if priority loading

    const el = containerRef.current
    if (!el || !imageOptimizerRef.current) return

    // Use image optimizer's observer
    imageOptimizerRef.current.observe(el)

    return () => {
      // Cleanup handled by ImageOptimizer
    }
  }, [priority])

  // Generate blur placeholder if none provided
  const blurPlaceholder = placeholder || (imageOptimizerRef.current?.createBlurPlaceholder(20, 20))

  return (
    <div 
      ref={containerRef} 
      style={{ width, height }} 
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder */}
      {!loaded && !error && blurPlaceholder && (
        <img 
          src={blurPlaceholder} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm" 
          loading="eager"
          aria-hidden="true"
        />
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
      
      {/* Main image */}
      {isVisible && !error && optimizedSrc && (
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
})

export default LazyImage


