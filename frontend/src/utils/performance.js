// Performance optimization utilities
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Image optimization utilities
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs) => {
  try {
    await Promise.all(srcs.map(preloadImage));
    return true;
  } catch (error) {
    console.warn('Some images failed to preload:', error);
    return false;
  }
};

// Intersection Observer utility for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Memory-efficient event listener management
export class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  add(element, event, handler, options = {}) {
    const key = `${element}_${event}`;
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key).push({ handler, options });
    element.addEventListener(event, handler, options);
  }

  remove(element, event, handler) {
    const key = `${element}_${event}`;
    const listeners = this.listeners.get(key);
    if (listeners) {
      const index = listeners.findIndex(l => l.handler === handler);
      if (index > -1) {
        listeners.splice(index, 1);
        element.removeEventListener(event, handler);
      }
    }
  }

  removeAll(element, event) {
    const key = `${element}_${event}`;
    const listeners = this.listeners.get(key);
    if (listeners) {
      listeners.forEach(({ handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
      this.listeners.delete(key);
    }
  }

  cleanup() {
    this.listeners.clear();
  }
}

// Performance monitoring utilities
export const performanceMonitor = {
  mark: (name) => {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  },

  measure: (name, startMark, endMark) => {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        performance.measure(name, startMark, endMark);
        const measures = performance.getEntriesByName(name);
        return measures[measures.length - 1]?.duration;
      } catch (error) {
        console.warn('Performance measurement failed:', error);
        return null;
      }
    }
    return null;
  },

  getMetrics: () => {
    if (typeof performance !== 'undefined' && performance.getEntriesByType) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      return {
        loadTime: navigation?.loadEventEnd - navigation?.loadEventStart,
        domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
      };
    }
    return null;
  }
};

// Bundle size optimization utilities
export const lazyImport = (importFn) => {
  let module = null;
  let promise = null;

  return () => {
    if (module) return Promise.resolve(module);
    if (promise) return promise;

    promise = importFn().then((mod) => {
      module = mod;
      return mod;
    });

    return promise;
  };
};

// Memory management utilities
export const memoryManager = {
  // Clean up unused objects
  cleanup: () => {
    if (typeof gc !== 'undefined') {
      gc();
    }
  },

  // Monitor memory usage
  getMemoryUsage: () => {
    if (typeof performance !== 'undefined' && performance.memory) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
      };
    }
    return null;
  }
};

export default {
  debounce,
  throttle,
  preloadImage,
  preloadImages,
  createIntersectionObserver,
  EventManager,
  performanceMonitor,
  lazyImport,
  memoryManager,
};
