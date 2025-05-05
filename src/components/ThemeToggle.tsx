import {
    FC,
    useEffect, useState
} from 'react';

const ThemeToggle:FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button id="theme-toggle" onClick={toggleTheme}>
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Theme
    </button>
  );
};

export default ThemeToggle;