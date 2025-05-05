// src/App.tsx
import { FC } from 'react';
import DebounceInput from './components/DebounceInput';
import ScrollBox from './components/ScrollBox';
import ThemeToggle from './components/ThemeToggle';
import './styles/styles.css';
import './styles/colors-variables.css';

const App:FC = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <DebounceInput />
      <ScrollBox />
    </div>
  );
};

export default App;
