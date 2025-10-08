import { useEffect, useRef, useState } from 'react'
import { ResourcePreloader, PerformanceMonitor } from '../utils/optimization'

// Performance optimization hook
export const usePerformanceOptimization = () => {
  const preloaderRef = useRef(null)
  const monitorRef = useRef(null)
  const [isOptimized, setIsOptimized] = useState(false)

  useEffect(() => {
    // Initialize performance tools
    preloaderRef.current = new ResourcePreloader()
    monitorRef.current = new PerformanceMonitor()

    // Preload critical resources
    preloadCriticalResources()

    // Mark as optimized
    setIsOptimized(true)

    return () => {
      preloaderRef.current = null
      monitorRef.current = null
    }
  }, [])

  const preloadCriticalResources = () => {
    if (!preloaderRef.current) return

    // Preload critical CSS
    preloaderRef.current.preloadCSS('/static/css/main.css')
    
    // Preload critical fonts
    preloaderRef.current.preloadFont('/static/fonts/inter.woff2')
    
    // Preload critical images
    preloaderRef.current.preloadImage('/logo.png')
    preloaderRef.current.preloadImage('/hero-bg.jpg')
    
    // Preload API endpoints
    preloaderRef.current.preloadAPI('/api/health')
  }

  const preloadRoute = (routePath, importFn) => {
    if (preloaderRef.current) {
      preloaderRef.current.preloadJS(routePath)
    }
    // Also preload the component
    setTimeout(() => {
      importFn().catch(console.warn)
    }, 100)
  }

  const getPerformanceMetrics = () => {
    return monitorRef.current?.getMetrics() || {}
  }

  return {
    isOptimized,
    preloadRoute,
    getPerformanceMetrics,
    preloader: preloaderRef.current,
    monitor: monitorRef.current
  }
}

// Critical CSS inlining hook
export const useCriticalCSS = () => {
  useEffect(() => {
    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for initial render */
      body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
      .hero-section { min-height: 100vh; background: linear-gradient(135deg, #0f101d 0%, #1a1a2e 100%); }
      .navbar { position: fixed; top: 0; width: 100%; z-index: 1000; }
      .loading-spinner { animation: spin 1s linear infinite; }
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `

    // Create style element
    const style = document.createElement('style')
    style.textContent = criticalCSS
    style.setAttribute('data-critical', 'true')
    
    // Insert at the beginning of head
    document.head.insertBefore(style, document.head.firstChild)

    // Load non-critical CSS asynchronously
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/static/css/main.css'
      link.media = 'print'
      link.onload = () => {
        link.media = 'all'
      }
      document.head.appendChild(link)
    }

    // Load after initial render
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadNonCriticalCSS)
    } else {
      loadNonCriticalCSS()
    }

    return () => {
      // Cleanup critical CSS
      const criticalStyle = document.querySelector('style[data-critical="true"]')
      if (criticalStyle) {
        criticalStyle.remove()
      }
    }
  }, [])
}

// Resource hints hook
export const useResourceHints = () => {
  useEffect(() => {
    // Add DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdnjs.cloudflare.com'
    ]

    externalDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = `//${domain}`
      document.head.appendChild(link)
    })

    // Add preconnect for critical external resources
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }, [])
}

// Bundle splitting hook
export const useCodeSplitting = () => {
  const [loadedChunks, setLoadedChunks] = useState(new Set())

  const loadChunk = async (chunkName, importFn) => {
    if (loadedChunks.has(chunkName)) {
      return
    }

    try {
      await importFn()
      setLoadedChunks(prev => new Set([...prev, chunkName]))
    } catch (error) {
      console.error(`Failed to load chunk ${chunkName}:`, error)
    }
  }

  const preloadChunk = (chunkName, importFn) => {
    if (loadedChunks.has(chunkName)) {
      return
    }

    // Preload the chunk
    importFn().catch(console.warn)
  }

  return {
    loadChunk,
    preloadChunk,
    loadedChunks: Array.from(loadedChunks)
  }
}

// Image optimization hook
export const useImageOptimization = () => {
  const [webpSupported, setWebpSupported] = useState(false)
  const [lazyImages, setLazyImages] = useState([])

  useEffect(() => {
    // Check WebP support
    const checkWebP = () => {
      const webP = new Image()
      webP.onload = webP.onerror = () => {
        setWebpSupported(webP.height === 2)
      }
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
    }

    checkWebP()
  }, [])

  const optimizeImageUrl = (src, options = {}) => {
    const { width, height, quality = 80 } = options
    
    // For local images, return as-is
    if (src.startsWith('/') || src.startsWith('./')) {
      return src
    }

    // For external images, add optimization parameters
    const params = new URLSearchParams()
    if (width) params.set('w', width.toString())
    if (height) params.set('h', height.toString())
    if (quality) params.set('q', quality.toString())
    if (webpSupported) params.set('f', 'webp')

    return `${src}?${params.toString()}`
  }

  const registerLazyImage = (element) => {
    setLazyImages(prev => [...prev, element])
  }

  const unregisterLazyImage = (element) => {
    setLazyImages(prev => prev.filter(img => img !== element))
  }

  return {
    webpSupported,
    optimizeImageUrl,
    registerLazyImage,
    unregisterLazyImage,
    lazyImages
  }
}

export default {
  usePerformanceOptimization,
  useCriticalCSS,
  useResourceHints,
  useCodeSplitting,
  useImageOptimization
}
