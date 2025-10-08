// Advanced image optimization utilities
export class ImageOptimizer {
  constructor() {
    this.cache = new Map();
    this.observer = null;
    this.initIntersectionObserver();
  }

  initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    );
  }

  // Generate optimized image URLs with WebP support
  generateOptimizedUrl(src, options = {}) {
    const {
      width,
      height,
      quality = 80,
      format = 'auto',
      fit = 'cover'
    } = options;

    // For local images, return as-is
    if (src.startsWith('/') || src.startsWith('./')) {
      return src;
    }

    // For external images, you can integrate with image optimization services
    // like Cloudinary, ImageKit, or Next.js Image Optimization
    const params = new URLSearchParams();
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    if (quality) params.set('q', quality.toString());
    if (format !== 'auto') params.set('f', format);
    if (fit) params.set('fit', fit);

    return `${src}?${params.toString()}`;
  }

  // Preload critical images
  async preloadCriticalImages(imageUrls) {
    const promises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
      });
    });

    try {
      await Promise.all(promises);
      return true;
    } catch (error) {
      console.warn('Some critical images failed to preload:', error);
      return false;
    }
  }

  // Generate responsive image sources
  generateResponsiveSources(src, sizes = [320, 640, 1024, 1280, 1920]) {
    return sizes.map(size => ({
      src: this.generateOptimizedUrl(src, { width: size }),
      width: size,
      media: `(max-width: ${size}px)`
    }));
  }

  // Create blur placeholder
  createBlurPlaceholder(width = 20, height = 20) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Create a simple gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(1, '#16213e');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    return canvas.toDataURL('image/jpeg', 0.1);
  }

  // Load image with progressive enhancement
  async loadImage(imgElement) {
    const src = imgElement.dataset.src;
    if (!src) return;

    try {
      // Check cache first
      if (this.cache.has(src)) {
        imgElement.src = this.cache.get(src);
        return;
      }

      // Load image
      const img = new Image();
      img.onload = () => {
        imgElement.src = src;
        imgElement.classList.add('loaded');
        this.cache.set(src, src);
      };
      
      img.onerror = () => {
        imgElement.classList.add('error');
      };
      
      img.src = src;
    } catch (error) {
      console.error('Failed to load image:', error);
      imgElement.classList.add('error');
    }
  }

  // Observe element for lazy loading
  observe(element) {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  // Cleanup
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.cache.clear();
  }
}

// WebP support detection
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Critical resource preloader
export class ResourcePreloader {
  constructor() {
    this.preloadedResources = new Set();
  }

  // Preload critical CSS
  preloadCSS(href) {
    if (this.preloadedResources.has(href)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
    this.preloadedResources.add(href);
  }

  // Preload critical JavaScript
  preloadJS(src) {
    if (this.preloadedResources.has(src)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = src;
    document.head.appendChild(link);
    this.preloadedResources.add(src);
  }

  // Preload critical fonts
  preloadFont(href, type = 'font/woff2') {
    if (this.preloadedResources.has(href)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = type;
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    this.preloadedResources.add(href);
  }

  // Preload critical images
  preloadImage(src) {
    if (this.preloadedResources.has(src)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
    this.preloadedResources.add(src);
  }

  // Preload critical API endpoints
  preloadAPI(endpoint) {
    if (this.preloadedResources.has(endpoint)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'fetch';
    link.href = endpoint;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    this.preloadedResources.add(endpoint);
  }
}

// Performance monitoring for Core Web Vitals
export class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Measure Largest Contentful Paint (LCP)
    this.measureLCP();
    
    // Measure First Input Delay (FID)
    this.measureFID();
    
    // Measure Cumulative Layout Shift (CLS)
    this.measureCLS();
    
    // Measure First Contentful Paint (FCP)
    this.measureFCP();
  }

  measureLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  measureFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  measureCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
            this.reportMetric('CLS', clsValue);
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  measureFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.reportMetric('FCP', entry.startTime);
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  reportMetric(name, value) {
    console.log(`Core Web Vital - ${name}:`, value);
    
    // Send to analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      });
    }
  }

  getMetrics() {
    return { ...this.metrics };
  }
}

// Bundle optimization utilities
export const bundleOptimizer = {
  // Dynamic imports with error handling
  dynamicImport: async (importFn, fallback = null) => {
    try {
      return await importFn();
    } catch (error) {
      console.warn('Dynamic import failed:', error);
      return fallback;
    }
  },

  // Preload route components
  preloadRoute: (routePath, importFn) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = routePath;
    document.head.appendChild(link);
    
    // Also preload the component
    setTimeout(() => {
      importFn().catch(console.warn);
    }, 100);
  },

  // Code splitting for heavy components
  splitComponent: (importFn) => {
    return React.lazy(() => importFn());
  }
};

export default {
  ImageOptimizer,
  ResourcePreloader,
  PerformanceMonitor,
  bundleOptimizer,
  supportsWebP,
};
