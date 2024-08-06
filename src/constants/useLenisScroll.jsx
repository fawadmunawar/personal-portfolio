import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisScroll = (options = {}) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      ...options,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [options]);
};

export default useLenisScroll;
