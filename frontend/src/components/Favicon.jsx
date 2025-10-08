import { useEffect } from 'react'
import logoPng from '../assets/logo.png'

function Favicon() {
  useEffect(() => {
    const ensureLink = (rel, sizes) => {
      let link = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`)
      if (!link) {
        link = document.createElement('link')
        link.rel = rel
        if (sizes) link.sizes = sizes
        document.head.appendChild(link)
      }
      return link
    }

    const icon32 = ensureLink('icon', '32x32')
    icon32.type = 'image/png'
    icon32.href = logoPng

    const icon = ensureLink('icon')
    icon.type = 'image/png'
    icon.href = logoPng

    const apple = ensureLink('apple-touch-icon', '180x180')
    apple.href = logoPng

    return () => {
      // Do not remove on unmount to avoid flicker across routes
    }
  }, [])

  return null
}

export default Favicon


