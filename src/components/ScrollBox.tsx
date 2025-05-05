import { FC, useEffect, useRef, useState } from 'react';
import useThrottle from '../hooks/useThrottle';

const ScrollBox:FC = ()=> {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [rawScroll, setRawScroll] = useState<number>(0);
  const [throttledScroll, setThrottledScroll] = useState<number>(0);

  const handleRawScroll = () => {
    if (boxRef.current) {
      const scrollTop = boxRef.current.scrollTop;
      console.log('[Raw Scroll] ScrollTop:', scrollTop);
      setRawScroll(scrollTop);
    }
  };

  const throttledHandleScroll = useThrottle(() => {
    if (boxRef.current) {
      const scrollTop = boxRef.current.scrollTop;
      console.log('[Throttled Scroll] ScrollTop:', scrollTop);
      setThrottledScroll(scrollTop);
    }
  }, 300);

  useEffect(() => {
    const ref = boxRef.current;
    if (!ref) return;

    const combinedHandler = () => {
      handleRawScroll();
      throttledHandleScroll();
    };

    ref.addEventListener('scroll', combinedHandler);
    return () => ref.removeEventListener('scroll', combinedHandler);
  }, [throttledHandleScroll]);

  return (
    <div>
      <h2>Scroll Throttle Demo</h2>
      <div id="scroll-box" ref={boxRef}>
        {[...Array(50)].map((_, i) => (
          <p key={i}>Scroll line {i + 1}</p>
        ))}
      </div>
      <div className="output">Raw Scroll: {rawScroll}px</div>
      <div className="output">Throttled Scroll: {throttledScroll}px</div>
    </div>
  );
};

export default ScrollBox;
