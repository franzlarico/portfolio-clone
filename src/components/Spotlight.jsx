import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Spotlight() {
  const { theme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    if (theme === 'light') return;

    const handleMouseMove = (e) => {
      const el = ref.current;
      if (el) {
        el.style.setProperty('--mouse-x', `${e.clientX}px`);
        el.style.setProperty('--mouse-y', `${e.clientY}px`);
        el.classList.add('active');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [theme]);

  if (theme === 'light') return null;

  return <div className="spotlight" ref={ref} />;
}
