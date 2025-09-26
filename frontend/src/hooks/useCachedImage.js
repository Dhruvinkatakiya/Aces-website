import { useEffect, useState } from 'react'

const toDataUrl = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })

export default function useCachedImage(src, options = {}) {
  const { cacheKeyPrefix = 'img-cache:', quality = 0.85, maxBytes = 4_500_000 } = options
  const [cachedSrc, setCachedSrc] = useState(null)

  useEffect(() => {
    let cancelled = false
    if (!src) return

    const key = `${cacheKeyPrefix}${src}`

    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        setCachedSrc(stored)
        return
      }
    } catch (e) {
      // localStorage may be unavailable (quota/SSR)
    }

    ;(async () => {
      try {
        const res = await fetch(src, { cache: 'force-cache' })
        const blob = await res.blob()

        // If it's already small enough, store directly
        let dataUrl = await toDataUrl(blob)

        // Try to compress via canvas if it's an image and larger than maxBytes
        if (dataUrl.length > maxBytes && blob.type.startsWith('image/')) {
          const img = document.createElement('img')
          const loaded = new Promise((resolve, reject) => {
            img.onload = resolve
            img.onerror = reject
          })
          img.src = URL.createObjectURL(blob)
          await loaded

          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          canvas.width = img.naturalWidth
          canvas.height = img.naturalHeight
          ctx.drawImage(img, 0, 0)
          dataUrl = canvas.toDataURL('image/jpeg', quality)
          URL.revokeObjectURL(img.src)
        }

        if (!cancelled) {
          setCachedSrc(dataUrl)
          try {
            localStorage.setItem(key, dataUrl)
          } catch (e) {
            // Quota exceeded; best-effort
          }
        }
      } catch (e) {
        // ignore fetch errors, fall back to original src
      }
    })()

    return () => {
      cancelled = true
    }
  }, [src, cacheKeyPrefix, quality, maxBytes])

  return cachedSrc
}


