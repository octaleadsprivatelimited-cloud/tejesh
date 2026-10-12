import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const storageKey = `scrollPosition_${location.pathname}`;
    
    // Restore scroll position
    let savedPosition;
    try { savedPosition = sessionStorage.getItem(storageKey); } catch { /* Storage may be disabled. */ }
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          top: position,
          behavior: 'instant'
        });
      });
    } else {
      // If no saved position, scroll to top for new pages
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;

    const saveScrollPosition = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const storageKey = `scrollPosition_${location.pathname}`;
      try { sessionStorage.setItem(storageKey, scrollPosition.toString()); } catch { /* Browsing still works without storage. */ }
    };

    // Debounced scroll handler
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        saveScrollPosition();
        isScrolling = false;
      }, 150);
    };

    // Save scroll position before page unload/navigation
    const handleBeforeUnload = () => {
      saveScrollPosition();
    };

    // Save scroll position on visibility change (when user switches tabs)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        saveScrollPosition();
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      // Save current position before cleanup (when navigating away)
      saveScrollPosition();
      
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default ScrollRestoration;

