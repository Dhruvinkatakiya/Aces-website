import { useState, useEffect } from 'react';

const useLoadingDetection = () => {
  const [isLoading, setIsLoading] = useState(false); // Start with loading false
  const [loadingReason, setLoadingReason] = useState('');

  useEffect(() => {
    let timeoutId;
    let resourceCheckInterval;
    const effectStartTimeMs = performance.now();

    // Check for slow network or resource loading issues
    const checkLoadingIssues = () => {
      // Check if page is still loading critical resources
      const checkResources = () => {
        const images = document.querySelectorAll('img');
        const videos = document.querySelectorAll('video:not([data-ignore-loading-check])');
        
        let unloadedResources = 0;
        
        // Check images
        images.forEach(img => {
          if (!img.complete || img.naturalWidth === 0) {
            unloadedResources++;
          }
        });
        
        // Check videos
        videos.forEach(video => {
          if (video.readyState < 3) { // HAVE_FUTURE_DATA or higher
            unloadedResources++;
          }
        });
        
        // Avoid checking <script> tags; there is no reliable synchronous "complete" API.
        
        return unloadedResources;
      };

      // Check network connection quality
      const checkNetworkQuality = () => {
        if ('connection' in navigator) {
          const connection = navigator.connection;
          const slowConnection = connection.effectiveType === 'slow-2g' || 
                                connection.effectiveType === '2g' ||
                                connection.downlink < 1; // Less than 1 Mbps
          return slowConnection;
        }
        return false;
      };

      // Check if page load is taking too long
      const checkPageLoadTime = () => {
        const elapsedMs = performance.now() - effectStartTimeMs;
        return elapsedMs > 3000; // More than 3 seconds since this hook started
      };

      // Determine if we should show loading screen
      const shouldShowLoading = () => {
        const unloadedResources = checkResources();
        const slowNetwork = checkNetworkQuality();
        const slowPageLoad = checkPageLoadTime();
        
        if (unloadedResources > 2) {
          setLoadingReason(`Loading ${unloadedResources} resources...`);
          return true;
        }
        
        if (slowNetwork) {
          setLoadingReason('Slow network detected...');
          return true;
        }
        
        // Only use slowPageLoad as a soft hint; do not force loading by itself
        // This avoids the loader getting stuck if nothing else is pending
        
        return false;
      };

      // Only show loading screen if there are actual loading issues
      if (shouldShowLoading()) {
        setIsLoading(true);
        
        // Continue checking every 500ms
        resourceCheckInterval = setInterval(() => {
          if (!shouldShowLoading()) {
            setIsLoading(false);
            clearInterval(resourceCheckInterval);
          }
        }, 500);
      }
    };

    // Start checking after a brief delay to allow initial page load
    const initialTimeout = setTimeout(checkLoadingIssues, 500);

    // Cleanup
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeoutId);
      clearInterval(resourceCheckInterval);
    };
  }, []);

  return { isLoading, loadingReason };
};

export default useLoadingDetection;
